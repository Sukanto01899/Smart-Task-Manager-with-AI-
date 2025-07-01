import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { Task } from '../type';

type TasksContextType = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: () => {},
});

type Props = {
  children: ReactNode;
};

const TaskContextProvider = ({children} : Props) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    );
};

export default TaskContextProvider;