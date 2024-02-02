import axios from "axios";

export const StripeAuthorizationApi = axios.create()

StripeAuthorizationApi.interceptors.request.use(
  (config) => {

    config.headers.Authorization = `Bearer sk_test_51OdBniCc07zP9ZGYdSW3NvLPYY2E7aQIuxWWsLVql8SfraWYdZ1iOIG0N6cLRGxuJYy8EPUW1kHpzyN2M6ZIqODn006dlEBf3n`;

    return config;
  }
)