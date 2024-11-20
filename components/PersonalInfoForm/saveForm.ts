import {
  FormData,
  PropertyFormData,
} from "@/components/PersonalInfoForm/formSchema";

type SupportedForms = "personal" | "property";

export function saveForm<T extends SupportedForms>(
  slug: T,
  data: T extends "personal" ? FormData : PropertyFormData,
) {
  const randomNumber = Math.random();

  return randomNumber >= 0.5 ? data : false;
}

const results = saveForm("personal", {
  firstName: "",
  lastName: "",
  phone: "",
});
