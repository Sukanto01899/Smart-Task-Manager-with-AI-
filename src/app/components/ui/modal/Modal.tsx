"use client";

import React, { useEffect, useRef } from "react";
import Form from "../form/Form";
import { IoCloseOutline } from "react-icons/io5";
import { Task } from "@/app/type";

type MyComponentProps = {
  isModalOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  task?: Task;
};

const Modal = ({ isModalOpen, toggleModal, task }: MyComponentProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        if (isModalOpen) {
          toggleModal(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return ()=>{
      document.removeEventListener("click", handleOutsideClick);
    }
  }, [isModalOpen, toggleModal]);

  return (
    <div
      ref={modalRef}
      className={`w-full h-full shadow-2xl md:w-[400px] px-4 py-5 md:max-h-[550px] rounded-tl-lg backdrop-blur-3xl rounded-tr-lg fixed transition-all ${
        isModalOpen && "top-[50%] opacity-100"
      } transform translate-[-50%] left-[50%] bottom-[-150%] opacity-0   duration-500 border-[1px] border-gray-300`}
    >
      <button
        onClick={() => toggleModal(false)}
        className="p-1 absolute hover:bg-gray-500 rounded-full text-white text-2xl top-2 cursor-pointer right-5"
      >
        <IoCloseOutline />
      </button>
      <Form task={task} toggleModal={toggleModal} />
    </div>
  );
};

export default Modal;
