"use client";

import { Task } from "@/app/type";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Button from "../button/Button";
import { FaWandMagicSparkles } from "react-icons/fa6";
  import { toast } from 'react-toastify';


interface CardProps {
  task: Task;
  handleDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ task, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subtasks, setSubtasks] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSuggestSubtasks = async (title: string) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/suggest-subtasks`, {
        method: "POST",
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      const subtasks = data.subtasks;
      setSubtasks(subtasks);
      console.log(subtasks)
      setLoading(false);
    } catch (err) {
      console.log(err)
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg shadow-md p-3 bg-gray-700 flex flex-col gap-3">
      <div>
        <h2 className="text-xl text-blue-500">{task.title}</h2>
        <p className="text-sm text-gray-400">{task.description}</p>
      </div>

      <ul>
        {subtasks?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="flex justify-between items-center text-sm">
        <div>
          status: <span>{task.status}</span>
        </div>

        <div>
          Date : <span>{task.date}</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-500 pt-2">
        <div className="flex items-center gap-2">
          <Button
            Icon={FaRegEdit}
            variant="icon"
            onClick={() => setIsModalOpen((prev) => !prev)}
          />
          <Button
            Icon={RiDeleteBinLine}
            variant="icon"
            onClick={() => handleDelete(task.id)}
          />
        </div>

        <Button
          onClick={() => handleSuggestSubtasks(task.title)}
          text={loading ? "Generating..." : "Suggest Subtask"}
          Icon={FaWandMagicSparkles}
          variant="ai"
        />
      </div>

      <Modal
        task={task}
        isModalOpen={isModalOpen}
        toggleModal={setIsModalOpen}
      />
    </div>
  );
};

export default Card;
