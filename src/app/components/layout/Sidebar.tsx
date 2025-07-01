"use client";

import React, { useState } from "react";
import Button from "../ui/button/Button";
import Modal from "../ui/modal/Modal";
import { RiGeminiFill } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";



const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside className=" lg:w-[300px] lg:fixed top-0 left-0 bg-gray-700 lg:h-screen">
      <div className="flex flex-row lg:flex-col justify-center items-center gap-4 border-b border-b-gray-500 p-2 lg:p-4">
        <span className="h-6 w-6 md:h-10 md:w-10 rounded-full bg-blue-600 animate-pulse ring-2 ring-blue-400 flex justify-center items-center text-xl"><RiGeminiFill/></span>
        <h1 className="text-lg lg:text-2xl uppercase text-transparent font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text">Ai Task Manager</h1>
      </div>

      <div
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="flex flex-col justify-center p-4"
      >
        <Button text="Add Task" variant="lg" Icon={IoAddOutline}/>
      </div>

      <Modal isModalOpen={isModalOpen} toggleModal={setIsModalOpen} />
    </aside>
  );
};

export default Sidebar;
