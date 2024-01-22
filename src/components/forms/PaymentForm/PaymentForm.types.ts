import {Dispatch, SetStateAction} from "react";
import {StepFormData} from "@/app/delivery-details/page.types";

export type PaymentFormData = {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

export type PaymentFormProps = {
  formData: PaymentFormData;
  setFormData: Dispatch<SetStateAction<StepFormData>>;
}