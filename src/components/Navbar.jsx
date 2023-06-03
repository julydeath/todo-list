import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useUserAuth } from "./auth/UserAuth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut()
    navigate("/login")
  }

  return (
    <div>
      <div className="w-full flex justify-between h-20 items-center shadow-xl mx-auto">
        <div className="text-3xl font-bold mx-8">
          <h1 onClick={() => navigate("/")} className="hover:cursor-pointer">TODO.</h1>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex px-8">
            <Link
              className="text-gray-500 font-medium mx-6 pt-2 hover:text-gray-800"
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                user
                  ? "hidden"
                  : "text-gray-500 font-medium mx-6 pt-2 hover:text-gray-800"
              }
              to="/signup"
            >
              Singup
            </Link>
            {user ? (
              <Link
                className="font-medium mx-6 pt-2 bg-black text-white rounded-md p-2 hover:bg-slate-800"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link
                className="font-medium mx-6 pt-2 bg-black text-white rounded-md p-2 hover:bg-slate-800"
                to="/login"
              >
                Login
              </Link>
            )}
          </ul>
          <div className="mx-4 md:hidden z-10">
            {nav ? (
              <GrClose
                className="bg-white"
                size={30}
                onClick={() => setNav(!nav)}
              />
            ) : (
              <GiHamburgerMenu onClick={() => setNav(!nav)} size={30} />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "w-[100%] h-full top-0 left-0 fixed text-black bg-black text-center ease-in-out duration-1000"
            : "hidden"
        }
      >
        <h1 className="text-3xl font-bold text-white py-6 border-b-2 border-white">
          TODO
        </h1>
        <ul className="flex flex-col text-white p-6 w-[40%] mx-auto">
          <Link
            className="my-4 border-b border-white py-2 hover:text-gray-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="my-4 border-b border-white py-2 hover:text-gray-500"
            to="/signup"
          >
            singup
          </Link>
          {user ? (
            <Link
              className="my-4 border-b border-white py-2 hover:text-gray-500"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <Link
              className="my-4 border-b border-white py-2 hover:text-gray-500"
              to="/login"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
