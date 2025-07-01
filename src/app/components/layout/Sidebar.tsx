"use client";

import React, { useState } from "react";
import Button from "../ui/button/Button";
import Modal from "../ui/modal/Modal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside className=" lg:w-[300px] lg:fixed top-0 left-0 bg-gray-700 lg:h-screen">
      <div className="flex flex-row justify-between lg:flex-col lg:justify-center items-center gap-4 border-b border-b-gray-500 p-2 lg:p-4">
        <span className="h-12 w-12 rounded-full bg-amber-600"></span>
        <h1 className="text-2xl text-blue-500 font-bold">Ai Task Manager</h1>
      </div>

      <div
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="flex flex-col justify-center p-4"
      >
        <Button text="Add Task" variant="lg"/>
      </div>

      <Modal isModalOpen={isModalOpen} toggleModal={setIsModalOpen} />
    </aside>
  );
};

export default Sidebar;
