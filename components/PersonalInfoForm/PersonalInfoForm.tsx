"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(3, "Min of 3 characters"),
  lastName: z.string(),
  phone: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const PersonalInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => {
          return (
            <Input
              {...field}
              errorMessage={errors.firstName?.message}
              isInvalid={!!errors.firstName}
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
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
