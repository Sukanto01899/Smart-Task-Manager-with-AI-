import { useState } from "react";
import useTasksContext from "./useTaskContext";
import { handleSuggestSubtasks } from "../lib/aiSuggest";
import { Task } from "../type";
import { toast } from "react-toastify";

const useSuggestAi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { tasks, setTasks } = useTasksContext();

  const handleSubtasks = async (title: string, id: string) => {
    try {
      setLoading(true);
      const subtasks = await handleSuggestSubtasks(title);
      setLoading(false);

      const findTaskForAddSubtask = tasks.find((item) => item.id === id);

      if (!findTaskForAddSubtask) return;

      const addedSubtask: Task = {
        ...findTaskForAddSubtask,
        subtasks: subtasks,
        id: id,
        title: findTaskForAddSubtask.title,
        description: findTaskForAddSubtask.description,
        status: findTaskForAddSubtask.status,
        date: findTaskForAddSubtask.date,
      };

      const updatedTasks = tasks.map((task) =>
        task.id === id ? addedSubtask : task
      );

      setTasks(updatedTasks);
    } catch (err) {
      setLoading(false);

      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(errorMessage);
    }
  };
  return { loading, handleSubtasks };
};

export default useSuggestAi;
