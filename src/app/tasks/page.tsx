"use client"

import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Dashboard from "../components/layout/Dashboard";
import TaskContextProvider from "../context/TaskContext";
  import { ToastContainer } from 'react-toastify';


const Page = () => {

  return (
    <TaskContextProvider>
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <Dashboard />
      <ToastContainer/>
    </div>
    </TaskContextProvider>
  );
};

export default Page;
