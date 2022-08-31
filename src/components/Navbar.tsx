import cx from "classnames";
import React, { FC, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  name?: string;
  settings?: boolean;
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
    <div className="flex justify-between items-center p-2 bg-white border-b-2">
      <div className="flex justify-between items-center text-3xl font-semibold ">
        <p>
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
      <div className="select-none">
        {props.settings ? (
          <AiFillHome
            className="cursor-pointer"
            size={28}
            onClick={() => navigate("/")}
          />
        ) : (
          <BsPersonCircle
            className="cursor-pointer"
            size={28}
            onClick={() => navigate("/settings")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
