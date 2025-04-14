import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="h-full w-full bg-transparent relative flex">
        <div className="w-full h-full flex flex-col justify-between">
          <header className="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-gray-800">
            <p className="font-bold text-3xl flex justify-center items-centers ">
              <span className="text-gray-200">Task</span>

              <span className="text-purple-400 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                Flow
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
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">
              <div className="flex flex-col items-end ">
                <div className="text-md font-medium ">{user?.name}</div>
              </div>

              <div className="h-10 w-10 z-100 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400">
                {token ? (
                  <div className=" flex items-center space-x-5">
                    <div
                      onClick={() => setOpen(!open)}
                      className={`relative  border-b-4 border-transparent  ${
                        open
                          ? "border-indigo-700 transform transition duration-300"
                          : ""
                      }`}
                    >
                      <div className="">
                        <div className="">
                          {user?.profile == "" ? (
                            <p className="text-[#f7f1f0] text-xl font-serif rounded-full">
                              {user?.name[0].toUpperCase()}
                            </p>
                          ) : (
                            <img
                              className="rounded-full"
                              src={user?.profile}
                              alt="profileImg"
                            />
                          )}
                        </div>
                      </div>
                      {open && (
                        <div className="absolute top-6 right-2 w-60 px-5 py-3 bg-white rounded-lg shadow-2xl border mt-5 ">
                          <ul className="space-y-3 dark:text-white">
                            <li className="font-serif font-thin flex flex-col items-center justify-center">
                              <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full overflow-hidden">
                                <p className="text-[#f7f1f0]">
                                  {user?.name[0].toUpperCase()}
                                </p>
                              </div>
                              <p className="mt-1 text-black">{user?.name}</p>
                              <p className="mt-1 text-black">{user?.email}</p>
                            </li>
                            <hr className="border-gray-400" />
                            <li className="font-medium">
                              <div
                                onClick={handleLogout}
                                className="flex text-black items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                              >
                                <div className="mr-3 cursor-pointer text-red-600">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                  </svg>
                                </div>
                                Logout
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <div className="rounded-full">
                        <img
                          className="rounded-full"
                          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
                          alt="profileImg"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
