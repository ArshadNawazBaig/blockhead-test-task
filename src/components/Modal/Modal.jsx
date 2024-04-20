import { CloseIcon } from "@/svgs/CloseIcon";
import React, { useCallback, useEffect } from "react";
import cls from "classnames";

export const Modal = ({
  open,
  onClose,
  children,
  id = "modal-backdrop",
  title,
  className = "",
  footerClass = "pt-5",
  footer = null,
  onSave = () => console.log("Onsave"),
  onDelete = () => console.log("onDelete"),
}) => {
  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target.id === id) {
        onClose();
      }
    },
    [id, onClose]
  );

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleBackdropClick);
      return () => {
        document.removeEventListener("mousedown", handleBackdropClick);
      };
    }
  }, [open, handleBackdropClick]);

  if (!open) return null;

  return (
    <div
      id={id}
      className="fixed inset-0 top-0 bg-black bg-opacity-50 z-50 flex justify-center items-center  p-6"
    >
      <div
        className={cls`${className} bg-white py-3 sm:pl-3 rounded-lg shadow-lg max-w-md w-full h-auto relative  `}
      >
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 pr-3">
          <button
            className="rounded-full h-[1.875rem] w-[1.875rem] flex items-center justify-center hover:bg-primary/50 text-grey-400 hover:text-white"
            onClick={onClose}
          >
            <CloseIcon className="h-4 w-4 flex " />
          </button>
        </div>
        <div className="max-h-[32rem] overflow-y-auto p-[1rem]">
          <div className="px-3">{children}</div>
        </div>
      </div>
    </div>
  );
};
