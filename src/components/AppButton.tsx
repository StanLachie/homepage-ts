import React, { FC } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface AppButtonProps {
  id: number;
  name: string;
  url: string;
  editMode: boolean;
  updater: Function;
  uninstaller: Function;
  icon?: string;
  darkMode: boolean;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const handleAppLaunch = () => {
    window.open(`https://${props.url}`);
  };

  return (
    <div
      className={`flex flex-col justify-between w-28 h-28 mx-2 ${
        props.darkMode ? "bg-zinc-900" : "bg-white"
      } rounded-xl shadow-lg cursor-pointer select-none`}
    >
      <div
        className={`flex flex-1 justify-center items-center text-xl font-semibold select-none ${
          props.darkMode ? "text-gray-100" : "text-gray-900"
        }`}
        title={`${props.name} App`}
        onClick={handleAppLaunch}
      >
        {props.name}
      </div>
      {props.editMode && (
        <div className="flex">
          <div
            className="flex justify-center items-center w-full h-6 bg-yellow-400 text-white text-md font-semibold rounded-bl-xl cursor-pointer"
            title={`Edit ${props.name}`}
            onClick={() => props.updater(props.id)}
          >
            <FiEdit />
          </div>
          <div
            className="flex justify-center items-center w-full h-6 bg-red-500 text-white text-md font-semibold rounded-br-xl cursor-pointer"
            title={`Delete ${props.name}`}
            onClick={() => props.uninstaller(props.id)}
          >
            <FiTrash2 />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppButton;
