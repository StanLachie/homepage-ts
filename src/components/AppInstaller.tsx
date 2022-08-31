import React, { FC } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

interface AppInstallerProps {
  registerApp: Function;
}

const AppInstaller: FC<AppInstallerProps> = (props) => {
  const handleAppInstall = () => {
    const appName = prompt("Application Name:");
    const appUrl = prompt("Application URL:");

    if ((appName && appUrl) === "") {
      alert("Application Name/URL must not be blank.");
    } else {
      props.registerApp(appName, appUrl);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-28 h-28 mx-2 bg-white rounded-xl shadow-lg cursor-pointer"
      title={`Add New App`}
      onClick={() => handleAppInstall()}
    >
      <BsPlusCircleDotted size={48} />
    </div>
  );
};

export default AppInstaller;
