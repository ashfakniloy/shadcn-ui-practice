"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { InputField } from "../Form/InputField";
import FormWrapper from "../Form/FormWrapper";
import { DatePicker } from "../Form/DatePicker";
import { SelectField } from "../Form/SelectField";
import { RadioField } from "../Form/RadioField";
import { SwitchField } from "../Form/SwitchField";
import { SwitchFieldGroup } from "../Form/SwithcFieldGroup";
import { CheckboxField } from "../Form/CheckboxField";

const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  contactNo: "",
  date_of_birth: undefined,
  language: "",
  gender: undefined,
  email_notifications: {
    communication: false,
    marketing: false,
    social: false,
    security: true,
  },
  agreement: undefined,
  // emailNotify: false,
  // image: "",
};

const formSchema = z
  .object({
    username: z.string().nonempty("Username is required").min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().nonempty("Email is required").email("Invalid email"),
    password: z.string().nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm password is required"),
    contactNo: z.string().nonempty("Contact Number is required"),
    date_of_birth: z.date({
      invalid_type_error: "Invalid date",
      required_error: "Date of birth is required",
    }),
    language: z.string().nonempty("Language is required"),
    gender: z.enum(["male", "female"], {
      required_error: "Gender is required",
    }),
    email_notifications: z.object({
      communication: z.boolean().default(false).optional(),
      marketing: z.boolean().default(false).optional(),
      social: z.boolean().default(false).optional(),
      security: z.boolean().default(true),
    }),
    // .optional(),
    // emailNotify: z.boolean().default(false).optional(),
    agreement: z.literal(true, {
      errorMap: () => ({
        message: "You must accept terms and conditions.",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type Formvalues = z.infer<typeof formSchema>;

export function FormDemo() {
  const form = useForm<Formvalues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: any) => {
    console.log("values", values);
    form.reset();
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-[400px] space-y-7"
    >
      <InputField
        label="Username"
        name="username"
        type="text"
        // description="This is your public display name."
        placeholder="Enter your username"
        // control={form.control}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        autoComplete="on"
      />
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        autoComplete="on"
      />
      <InputField
        label="Contact Number"
        name="contactNo"
        type="text"
        placeholder="Enter your contact number"
      />
      <DatePicker
        label="Date of birth"
        name="date_of_birth"
        placeholder="Enter your date of birth"
      />
      <SelectField
        label="Language"
        name="language"
        placeholder="Select a language"
        options={[
          { name: "Javascript", value: "javascript" },
          { name: "Typescript", value: "typescript" },
          { name: "Rust", value: "rust" },
          { name: "Django", value: "django" },
          { name: "PHP", value: "php" },
        ]}
      />
      <RadioField
        label="Select Gender"
        name="gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />
      {/* <SwitchField
        label="Marketing emails"
        name="notifications.email"
        description="Receive emails about new products, features, and more"
      />
      <SwitchField
        label="Private emails"
        name="notifications.private"
        description="Receive emails about new products, features, and more"
      /> */}
      <SwitchFieldGroup
        label="Email Notifications"
        options={[
          {
            name: "email_notifications.communication",
            label: "Communication emails",
            description: "Receive emails about your account activity.",
          },
          {
            name: "email_notifications.marketing",
            label: "Marketing emails",
            description:
              "Receive emails about new products, features, and more..",
          },
          {
            name: "email_notifications.social",
            label: "Social emails",
            description:
              "Receive emails for friend requests, follows, and more.",
          },
          {
            name: "email_notifications.security",
            label: "Security emails",
            description:
              "Receive emails about your account activity and security.",
            disabled: true,
          },
        ]}
      />

      <CheckboxField name="agreement" label="I agree with terms and policy" />

      <div className="!mt-10 flex justify-end">
        <Button type="submit" className="">
          Submit
        </Button>
      </div>
    </FormWrapper>
  );
}
