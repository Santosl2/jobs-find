import React from "react";

export type CheckboxProps = {
  title: string;
  value: string;
  checked?: boolean;
  onChange?: (value: React.BaseSyntheticEvent) => void;
};
