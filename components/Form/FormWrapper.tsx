import { FormProvider, UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Formvalues } from "../Demo/FormDemo";

type FormWrapperProps = {
  form: UseFormReturn<Formvalues>;
  onSubmit: (values: any) => void;
  className: string;
  children: React.ReactNode;
};

function FormWrapper({
  form,
  onSubmit,
  className,
  children,
}: FormWrapperProps) {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className={className} noValidate>
        {children}
      </form>
    </Form>
    // <FormProvider {...form}>
    //   <form onSubmit={onSubmit} className={className} noValidate>
    //     {children}
    //   </form>
    // </FormProvider>
  );
}

export default FormWrapper;
