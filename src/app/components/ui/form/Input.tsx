import React, { useId } from "react";
import { FieldError } from "react-hook-form";

type InputType = {
  type: string;
  label?: string;
  placeholder: string;
  classname?: string;
  formData: object;
  error?: FieldError;
  defaultValue?: string ;
};

export const Input = ({
  type,
  label,
  placeholder,
  classname,
  formData,
  error,
  defaultValue
}: InputType) => {
  const uniqueId = useId();

//   console.log(reg)
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-gray-400" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <input
      {...formData}
      defaultValue={defaultValue || ""}
        type={type}
        id={uniqueId}
        placeholder={placeholder}
        className={`${classname} bg-gray-600 py-2 px-3 w-full outline-none border rounded-lg text-md border-blue-300`}
      />

      {error && <span>{error.message}</span>}
    </div>
  );
};

type TextAreaType = {
  row: number;
  label: string;
  formData: object;
  error?: FieldError;
  defaultValue?: string;
};

export const TextArea = ({ row, label, formData, error, defaultValue }: TextAreaType) => {
  const uniqueId = useId();
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-gray-400" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <textarea
      {...formData}
      defaultValue={defaultValue || ""}
        id={uniqueId}
        rows={row}
        className="outline-none bg-gray-600 py-2 px-3 border border-blue-300 rounded-lg"
      ></textarea>

      {error && <span>{error.message}</span>}
    </div>
  );
};

type SelectType = {
  options: string[];
  label: string;
  formData: object;
  error?: FieldError;
  defaultValue?: string;
};

export const Select = ({ options, label, formData, error, defaultValue }: SelectType) => {
    const uniqueId = useId();
  return (
    <div className="flex flex-col gap-2">
        {label && (
        <label className="text-sm text-gray-400" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <select defaultValue={defaultValue || ""} {...formData} className="outline-none bg-gray-600 capitalize py-2 px-3 border border-blue-300 rounded-lg" id={uniqueId}>
        {
            options.map((option, i) => (
                <option value={option} className="text-black bg-blue-400 rounded-lg" key={i}>{option}</option>
            ))
        }
      </select>

      {error && "Select status " }
    </div>
  );
};
