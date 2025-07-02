import React from "react";
import { Input, Select, TextArea } from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task, TaskStatus } from "@/app/type";
import useTasksContext from "@/app/hooks/useTaskContext";
import Button from "../button/Button";
import { toast } from "react-toastify";

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
      return toast.warn('Please select future date')
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full"
    >
      <div className="flex flex-col gap-4">
        <Input
          defaultValue={task?.title}
          formData={{ ...register("title", { required: true, maxLength: 30 }) }}
          type="text"
          label="Enter task title. (30w max)"
          placeholder="Title..."
          error={errors.title}
        />

        <TextArea
          defaultValue={task?.description}
          formData={{
            ...register("description", { required: true, maxLength: 300 }),
          }}
          row={5}
          label="Enter task description."
          error={errors.description}
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
          options={["pending", "completed"]}
          label="Select task status"
        />
      </div>
      {/* <Button /> */}
      <Button text={task ? "Update" : "Create"} variant="md" type="submit" />
    </form>
  );
};

export default Form;
