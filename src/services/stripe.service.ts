import {BaseApi} from "@/services/base.service";
import {ICartItem} from "@/models";
import {IPaymentIntentResponse} from "@/models/stripe.models";

export const StripeApi = {
  CreatePaymentIntent: async (items: ICartItem[]): Promise<IPaymentIntentResponse> =>
    BaseApi.post('/api/create-payment-intent', {items}),
}