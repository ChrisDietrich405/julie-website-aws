import {Dispatch, SetStateAction} from "react";
import {StepFormData} from "@/app/delivery-details/page.types";

export type IdentificationFormData = {
  firstName: string;
  lastName: string;
  email: string;
}

export type IdentificationFormProps = {
  formData: IdentificationFormData;
  setFormData: Dispatch<SetStateAction<StepFormData>>;
}