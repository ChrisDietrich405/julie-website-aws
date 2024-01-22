import {Dispatch, SetStateAction} from "react";
import {StepFormData} from "@/app/delivery-details/page.types";

export type AddressFormData = {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
}

export type AddressFormProps = {
  formData: AddressFormData;
  setFormData: Dispatch<SetStateAction<StepFormData>>;
}