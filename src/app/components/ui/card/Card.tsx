"use client";

import { Task } from "@/app/type";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Button from "../button/Button";
import { FaWandMagicSparkles } from "react-icons/fa6";
import useSuggestAi from "@/app/hooks/useSuggestAi";

interface CardProps {
  task: Task;
  handleDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ task, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, handleSubtasks } = useSuggestAi();

  return (
    <div className="rounded-lg shadow-md p-3 bg-gray-700 flex flex-col justify-between gap-3">
      <div>
        <h2 className="text-xl text-blue-500">{task.title}</h2>
        <p className="text-sm text-gray-400 break-words">{task.description}</p>
      </div>

      <ul className="text-sm flex flex-wrap gap-2 ">
        {task?.subtasks?.map((item, i) => (
          <li
            className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg py-1 px-2 shadow-md cursor-pointer hover:scale-105"
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>

      <div>
        <div className="flex justify-between items-center text-sm pb-3">
          <div>
            Status:{" "}
            <span
              className={`${
                task.status === "pending" ? "text-amber-500" : "text-green-500"
              } uppercase`}
            >
              {task.status}
            </span>
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
            onClick={() => handleSubtasks(task.title, task.id)}
            text={loading ? "Generating..." : "Suggest Subtask"}
            Icon={FaWandMagicSparkles}
            variant="ai"
          />
        </div>
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
