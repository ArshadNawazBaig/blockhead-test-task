import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { SuggestionDropdown } from "../Select/Select";
import { locationData } from "./data";

export const ContactModal = () => {
  const { contact, setContact } = useModals();
  return (
    <Modal
      id="contact"
      open={contact}
      onClose={() => setContact(false)}
      title="Edit Contact Information"
      className="!max-w-[46.5rem] !w-full shadow-xl"
    >
      <div className="">
        <SuggestionDropdown
          className="mt-6"
          placeholder="Current Location"
          label="Current Location"
          options={locationData}
        />
        <div className="flex gap-6 mt-6 items-end flex-wrap sm:flex-nowrap sm:gap-2.5">
          <Input placeholder="Phone Number" />
          <Input placeholder="Email" />
        </div>
      </div>
    </Modal>
  );
};
