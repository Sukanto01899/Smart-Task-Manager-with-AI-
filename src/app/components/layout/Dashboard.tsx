"use client";

import React, { useEffect, useState } from "react";
import Card from "../ui/card/Card";
import useTasksContext from "@/app/hooks/useTaskContext";
import { Task } from "@/app/type";
import { IoGridOutline } from "react-icons/io5";


const filterOptionsList = ["all", "completed", "pending"];

const Dashboard = () => {
  const [filterOption, setFilterOption] = useState<string>("all");
  const { tasks, setTasks} = useTasksContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const handleDelete = (id : string)=>{
    const filtered = tasks.filter(item => item.id !== id);
    setTasks(filtered);
  }

  useEffect(() => {
   
      if(filterOption === 'all'){
        setFilteredTasks(tasks)
      }else{
        const filtered = tasks.filter(item => item.status === filterOption);
        setFilteredTasks(filtered)
      }
    
  }, [filterOption, tasks]);

  return (
    <div className="lg:ml-[300px] p-4 flex-1 overflow-y-auto">
      <div className="flex overflow-hidden justify-between items-center w-full h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="flex h-full">
          {filterOptionsList.map((option, i) => (
            <div
              onClick={() => setFilterOption(option)}
              key={i}
              className={`${
                option === filterOption && "bg-blue-400"
              } cursor-pointer w-full h-full px-4 text-md flex items-center capitalize`}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="pr-5 text-xl">
          <IoGridOutline className="text-gray-600 font-bold"/>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
