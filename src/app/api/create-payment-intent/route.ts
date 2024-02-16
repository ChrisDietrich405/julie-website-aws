import {NextRequest, NextResponse} from "next/server";
import Stripe from 'stripe'
import {ICart} from "@/models";

const stripe = new Stripe(process.env.STRIPE_KEY as string)

export async function POST(req: NextRequest) {

  const body: { items: ICart } = await req.json();

  const {items} = body;

  const amount = items.reduce((total, item) => total + item.price, 0)

  if (!Array.isArray(items) || !items.length) return NextResponse.json({
      error: {
        message: 'must have at least 1 item'
      },
    },
    {status: 400}
  )

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json(
      {
        status: 201,
        amount,
        clientSecret: paymentIntent.client_secret,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json({
        error: {
          message: (err as Error).message
        }
      },
      {
        status: 400,
      }
    )
  }
}
