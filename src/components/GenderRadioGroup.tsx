import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Male, Female } from "react-gender";
import { Controller } from "react-hook-form";
import { useFormContext } from "~/components/FormContext";

const memoryOptions = [
  { name: "male", component: <Male color="000000" /> },
  { name: "female", component: <Female color="000000" /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GenderRadioGroup() {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name="gender"
        defaultValue={memoryOptions[0]}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange} className="mt-2">
            <RadioGroup.Label className="sr-only">
              Choose gender
            </RadioGroup.Label>
            <div className="grid grid-cols-2 gap-3">
              {memoryOptions.map((option) => (
                <RadioGroup.Option
                  key={option.name}
                  value={option}
                  className={({ active, checked }) =>
                    classNames(
                      active ? "ring-2 ring-offset-2" : "",
                      checked
                        ? "bg-indigo-300 text-white hover:bg-indigo-200"
                        : "ring-inse bg-white text-gray-900  hover:bg-gray-50",
                      "flex items-center justify-center rounded-md px-3 py-3 text-sm font-semibold uppercase sm:flex-1"
                    )
                  }
                >
                  <RadioGroup.Label as="span">
                    <div className="h-20 w-20">{option.component}</div>
                  </RadioGroup.Label>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
      />
    </div>
  );
}
