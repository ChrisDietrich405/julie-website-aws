import {StripeAuthorizationApi} from "@/services/StripeAuthorizationApi";

const baseUrl = 'https://api.stripe.com/v1'

export const StripeApi = {
  createPaymentIntent: async (data: any): Promise<any> =>
    StripeAuthorizationApi.post(baseUrl + '/payment_intents', data),
}