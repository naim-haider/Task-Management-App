import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTask } from "../redux/slices/TaskSlice";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }
    const res = await axios.post(
      `${apiUrl}/tasks`,
      { title, description, status: "pending" },
      { headers: { Authorization: `JWT ${token}` } }
    );
    dispatch(addTask(res.data));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <p className="font-bold text-3xl flex justify-center items-centers">
        Add
        <span className="text-purple-400 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
          Task
          <svg
            className="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              strokeWidth={2}
            />
          </svg>
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex space-x-2 flex-col md:flex-row gap-3.5 md:gap-0"
      >
        <input
          className="border p-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task title"
        />
        <input
          className="border p-2 flex-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="New Task Description"
        />
        <button className="bg-gray-800 text-white px-4 cursor-pointer">
          Add
        </button>
      </form>
    </>
  );
}

export default TaskForm;
