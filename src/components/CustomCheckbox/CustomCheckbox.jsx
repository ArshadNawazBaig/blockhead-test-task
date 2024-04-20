import { CheckIcon } from "@/svgs/CheckIcon";
import React from "react";

export const CustomCheckbox = ({
  variant = "success",
  checked = false,
  setChecked,
  label = "",
}) => {
  const tags = {
    success: "success",
    primary: "primary",
    warning: "warning",
    danger: "danger",
  };
  return (
    <div className="flex gap-2 mt-6 items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={setChecked}
        className="relative peer shrink-0 items-center flex
                appearance-none w-5 h-5 border-2 border-success rounded-sm bg-white
                checked:bg-white checked:border-success 
                focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[none]
                disabled:border-steel-400 disabled:bg-steel-400 "
      />
      <label className="text-sm font-medium text-grey-400">{label}</label>
      <CheckIcon colorClass={"black"} />
    </div>
  );
};
