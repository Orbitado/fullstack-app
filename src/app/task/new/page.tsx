"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewTask = () => {
  const router = useRouter();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const createTask = async () => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.push("/");
    router.refresh();
    console.log(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask();
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-7rem)] align-middle">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="border-2 bg-gray-800 my-4 p-4 rounded-lg w-full"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Task Description"
          cols={30}
          rows={5}
          className="border-2 bg-gray-800 my-4 p-4 rounded-lg w-full"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTask;
