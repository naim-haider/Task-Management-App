import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTasks, deleteTask, updateTask } from "../../redux/slices/TaskSlice";
import TaskForm from "../../components/TaskForm";

function Tasks() {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const { token } = useSelector((state) => state.user);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(`${apiUrl}/tasks`, {
        headers: { Authorization: `JWT ${token}` },
      });
      dispatch(setTasks(res.data));
    };
    fetchTasks();
  }, [dispatch, token]);

  //  Delete Task
  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/tasks/${id}`, {
      headers: { Authorization: `JWT ${token}` },
    });
    dispatch(deleteTask(id));
  };

  // Update Task
  const handleToggleStatus = async (task) => {
    const updated = {
      ...task,
      status: task.status === "pending" ? "completed" : "pending",
    };
    const res = await axios.put(`${apiUrl}/tasks/${task._id}`, updated, {
      headers: { Authorization: `JWT ${token}` },
    });
    dispatch(updateTask(res.data));
  };

  const toggleBtn = (i) => {
    setActive(active == i ? null : i);
  };

  return (
    <div className="p-4 mx-auto">
      <div className="h-full w-full bg-white relative flex overflow-hidden">
        <div className="w-full h-full flex gap-5 flex-col justify-between">
          <TaskForm />
          <p className="font-bold text-3xl flex justify-center items-centers">
            Your
            <span className="text-purple-400 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
              Tasks
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

          <main className="max-w-full h-full flex relative overflow-y-hidden">
            <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
              {tasks?.map((task, index) => (
                <div
                  key={task._id}
                  className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"
                >
                  <div className="min-h-full bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
                    <div className="max-w-7xl mx-auto">
                      <div className="relative group  mx-3">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                          <div className="space-y-2 flex gap-7 items-center">
                            <div className="flex flex-col gap-2">
                              {task.status == "completed" ? (
                                <p className="text-gray-400 line-through text-xl font-semibold font-serif">
                                  {task.title}
                                </p>
                              ) : (
                                <p className="text-slate-800 text-xl font-semibold font-serif">
                                  {task.title}
                                </p>
                              )}
                              {active == index && (
                                <p className="text-gray-500 font-serif">
                                  {task.description}
                                </p>
                              )}
                              {active != index ? (
                                <p
                                  className="block cursor-pointer text-indigo-400 hover:text-indigo-600 transition duration-200"
                                  onClick={() => toggleBtn(index)}
                                >
                                  Show Task
                                </p>
                              ) : (
                                <div className="flex gap-5 justify-between">
                                  <p
                                    className="block cursor-pointer text-indigo-400 hover:text-indigo-600 transition duration-200"
                                    onClick={() => toggleBtn(index)}
                                  >
                                    Hide Task
                                  </p>

                                  <p
                                    className={`${
                                      task.status == "pending"
                                        ? "text-red-500"
                                        : "text-green-400"
                                    }`}
                                  >
                                    {task.status}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              {task?.status == "pending" ? (
                                <svg
                                  className="w-5 h-5 text-gray-600 cursor-pointer"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  onClick={() => handleToggleStatus(task)}
                                >
                                  <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="w-5 h-5 text-green-600 cursor-pointer"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  onClick={() => handleToggleStatus(task)}
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M5 13l4 4L19 7M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                                  />
                                </svg>
                              )}
                              <svg
                                className="w-5 h-5 text-red-600 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                onClick={() => handleDelete(task._id)}
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12zM10 11v6M14 11v6"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
