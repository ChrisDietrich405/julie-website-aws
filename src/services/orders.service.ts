import {BaseApi} from "@/services/base.service";

const baseUrl = '/api/orders'

export const OrdersApi = {
  post: async (params: any): Promise<any> => {
    BaseApi.post(baseUrl, params)
  },
  put: async (orderCodeState: string, params: any): Promise<any> => {
    BaseApi.put(`${baseUrl}/${orderCodeState}`, params)
  }
}