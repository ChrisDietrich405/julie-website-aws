import {AxiosResponse} from "axios";

export interface IPaymentIntentBaseResponse {
  status: number;
  amount: number;
  clientSecret: string;
}

export type IPaymentIntentResponse = AxiosResponse<IPaymentIntentBaseResponse>