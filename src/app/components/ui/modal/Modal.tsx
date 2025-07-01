"use client";

import React from "react";
import Form from "../form/Form";
import { IoCloseOutline } from "react-icons/io5";
import { Task } from "@/app/type";

type MyComponentProps = {
  isModalOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  task?: Task;
};

const Modal = ({ isModalOpen, toggleModal, task }: MyComponentProps) => {
  return (
    <div
      className={`w-full h-full shadow-2xl lg:w-[400px] px-4 py-5 lg:h-[500px] rounded-tl-lg backdrop-blur-3xl rounded-tr-lg fixed transition-all ${
        isModalOpen ? "bottom-[0%]" : "bottom-[-100%]"
      } transform translate-x-[-50%] left-[50%] duration-500 border-t-[1px] border-l-[1px] border-r-[1px] border-gray-300`}
    >
      <button
        onClick={() => toggleModal(false)}
        className="p-1 absolute hover:bg-gray-500 rounded-full text-white text-2xl top-2 cursor-pointer right-5"
      >
        <IoCloseOutline />
      </button>
      <Form task={task} toggleModal={toggleModal}/>
    </div>
  );
};

export default Modal;
