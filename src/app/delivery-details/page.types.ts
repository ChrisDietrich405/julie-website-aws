import {IdentificationFormData} from "@/components/forms/IdentificationForm/IdentificationForm.types";
import {AddressFormData} from "@/components/forms/AddressForm/AddressForm.types";
import {PaymentFormData} from "@/components/forms/PaymentForm/PaymentForm.types";

export type StepFormData = {
  identification: IdentificationFormData,
  address: AddressFormData,
  payment: PaymentFormData,
}