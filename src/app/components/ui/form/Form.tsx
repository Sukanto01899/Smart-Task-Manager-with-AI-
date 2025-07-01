import React from "react";
import { Input, Select, TextArea } from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task, TaskStatus } from "@/app/type";
import useTasksContext from "@/app/hooks/useTaskContext";

type Props = {
  task?: Task;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type Inputs = {
  title: string;
  description: string;
  date: string;
  status: TaskStatus;
};

const Form = ({ task, toggleModal }: Props) => {
  const { tasks, setTasks } = useTasksContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 6);

    const selectedTime = new Date(data.date);
    const today = new Date();

    if (selectedTime < today) {
      return console.log("You are in past");
    }

    if (task) {
      const updateTasks = tasks.find((item) => item.id === task.id);
      if (!updateTasks) return;

      const updatedTask: Task = { ...updateTasks, ...data, id: updateTasks.id };

      setTasks((prevTasks: Task[]) =>
        prevTasks.map((item) => (item.id === task.id ? updatedTask : item))
      );
    } else {
      setTasks((prevTasks: Task[]) => [...prevTasks, { ...data, id }]);
    }

    reset();
    toggleModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Input
        defaultValue={task?.title}
        formData={{ ...register("title", { required: true }) }}
        type="text"
        label="Enter task title."
        placeholder="Title..."
      />

      <TextArea
        defaultValue={task?.description}
        formData={{ ...register("description", { required: true }) }}
        row={5}
        label="Enter task description."
      />

      <Input
        defaultValue={task?.date}
        error={errors.date}
        formData={{ ...register("date", { required: true }) }}
        type="date"
        label="Enter due date"
        placeholder="Date.."
      />

      <Select
        defaultValue={task?.status}
        error={errors.status}
        formData={{ ...register("status", { required: true }) }}
        options={["complete", "pending"]}
        label="Select task status"
      />

      {/* <Button /> */}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
