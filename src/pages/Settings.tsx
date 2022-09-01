import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Navbar from "../components/Navbar";

interface SettingsProps {
  darkMode: boolean;
  toggleDark: Function;
}

const Settings: FC<SettingsProps> = (props) => {
  let navigate = useNavigate();
  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "aqua", label: "Aqua" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
  ];
  const [name, setName] = useState(
    localStorage.getItem("hpUsername") || "user"
  );
  const [color, setColor] = useState(
    localStorage.getItem("hpUserColor") || "{ value: 'blue', label: 'Blue' }"
  );

  const handleNameChange = (selectedName: string) => {
    if (name) {
      setName(selectedName);
    } else {
      return;
    }
  };

  const handleColorSelect = (selectedColor: any) => {
    setColor(selectedColor);
  };

  const handleSubmit = () => {
    if (name) {
      localStorage.setItem("hpUsername", name);
    }
    localStorage.setItem("hpUserColor", JSON.stringify(color));
    navigate("/");
  };

  return (
    <div
      className={`flex-1 h-screen ${
        props.darkMode ? "bg-zinc-800" : "bg-gray-100"
      } text-gray-800`}
    >
      <Navbar
        settings={true}
        darkMode={props.darkMode}
        toggleDark={props.toggleDark}
      />
      <div className="flex m-2">
        <form className="flex flex-col" onSubmit={() => handleSubmit()}>
          <label className={`${props.darkMode ? "text-gray-100" : "text-gray-900"}`} htmlFor="usernameInput">Name:</label>
          <input
            className="h-9 px-2 py-0.5 border-solid border border-neutral-300 rounded"
            placeholder={name || "user"}
            id="usernameInput"
            name="usernameInput"
            minLength={2}
            onChange={(e) => handleNameChange(e.target.value)}
          ></input>
          <label className={`${props.darkMode ? "text-gray-100" : "text-gray-900"}`} htmlFor="colorInput">User Theme:</label>
          <Select
            id="colorInput"
            name="colorInput"
            options={colorOptions}
            onChange={handleColorSelect}
          />
          <input
            className="h-9 my-4 bg-blue-500 text-white rounded"
            type="submit"
            value="Submit"
            onSubmit={() => handleSubmit()}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Settings;
