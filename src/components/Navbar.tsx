import cx from "classnames";
import React, { FC, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsMoonStars, BsMoonStarsFill, BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  name?: string;
  settings?: boolean;
  darkMode: boolean;
  toggleDark: Function;
}

const Navbar: FC<NavbarProps> = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("hpUsername"));
  const [userColor, setUserColor] = useState({
    value: "blue",
    label: "Blue",
  });

  const loadUserDetails = () => {
    const storedColor = localStorage.getItem("hpUserColor");
    if (storedColor) {
      setUserColor(JSON.parse(storedColor));
    }
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  return (
    <div
      className={`flex justify-between items-center p-2 ${
        props.darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white"
      } border-b-2`}
    >
      <div className="flex justify-between items-center text-3xl font-semibold ">
        <p className={`${props.darkMode ? "text-gray-100" : "text-gray-900"}`}>
          {!props.settings ? "Welcome home, " : "Homepage "}
          <span
            className={cx(
              userColor.value === "red" && "text-red-600",
              userColor.value === "orange" && "text-amber-600",
              userColor.value === "yellow" && "text-yellow-500",
              userColor.value === "green" && "text-green-600",
              userColor.value === "aqua" && "text-sky-500",
              userColor.value === "blue" && "text-blue-600",
              userColor.value === "purple" && "text-violet-700"
            )}
          >
            {!props.settings ? username || "user" : "v0.5"}
          </span>
        </p>
      </div>
      <div className="flex select-none">
        {props.darkMode ? (
          <BsMoonStarsFill
            className={`mr-4 ${
              props.darkMode ? "text-white" : "text-black"
            } cursor-pointer`}
            size={28}
            onClick={() => props.toggleDark()}
          />
        ) : (
          <BsMoonStars
            className={`mr-4 ${
              props.darkMode ? "text-white" : "text-black"
            } cursor-pointer`}
            size={28}
            onClick={() => props.toggleDark()}
          />
        )}
        {props.settings ? (
          <AiFillHome
            className={`${
              props.darkMode ? "text-white" : "text-black"
            } cursor-pointer`}
            size={28}
            onClick={() => navigate("/")}
          />
        ) : (
          <BsPersonCircle
            className={`${
              props.darkMode ? "text-white" : "text-black"
            } cursor-pointer`}
            size={28}
            onClick={() => navigate("/settings")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
