import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const FormContext = createContext(null);

export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const methods = useForm();

  return (
    <FormContext.Provider value={methods}>{children}</FormContext.Provider>
  );
}
