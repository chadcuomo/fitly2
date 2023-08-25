import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { type NextPage } from "next/types";

import { useFormContext } from "~/components/FormContext";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  error: boolean;
}
const Input: NextPage<InputProps> = ({
  name,
  placeholder,
  label,
  error = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          {...register(name, { required: "This field is required" })}
          type={name}
          name={name}
          id={name}
          className={`block w-full rounded-md border-0 py-1.5 pr-10 ${
            error
              ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
              : "text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-500"
          } sm:text-sm sm:leading-6`}
          placeholder={placeholder}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={`${name}-error`}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default Input;
