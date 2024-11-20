"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

import { saveForm } from "@/components/PersonalInfoForm/saveForm";
import {
  formSchema,
  PropertyFormData,
} from "@/components/PersonalInfoForm/formSchema";

export const PropertyInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PropertyFormData>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: PropertyFormData) => {
    const result = saveForm(data);

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => {
          return (
            <RadioGroup name="propertyType">
              <Radio value="singleFamily">Single family</Radio>
              <Radio value="multiFamily">Multi family</Radio>
            </RadioGroup>
          );
        }}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => {
          return (
            <Input
              {...field}
              errorMessage={errors.lastName?.message}
              label="Lastt Name"
              name="lastName"
              placeholder="Last Name"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => {
          return (
            <Input
              {...field}
              errorMessage={errors.phone?.message}
              label="Phone number"
              name="phone"
              placeholder="Phone number"
            />
          );
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
