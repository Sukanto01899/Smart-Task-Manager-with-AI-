import { useContext } from "react";
import { TasksContext } from "../context/TaskContext";



const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("Tasks context not found!");
  }

  return context;
};

export default useTasksContext;
