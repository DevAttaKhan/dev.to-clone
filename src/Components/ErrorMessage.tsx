import React from "react";
import { FieldError } from "react-hook-form";

type Props = {
  error?: FieldError;
};

export const ErrorMessage = ({ error }: Props) => {
  return error && <span className="text-red-900 mt-3">{error.message}</span>;
};
