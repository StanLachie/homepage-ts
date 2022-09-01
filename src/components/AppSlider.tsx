import React, { FC, useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import AppButton from "./AppButton";
import AppInstaller from "./AppInstaller";

interface AppSliderProps {
  darkMode: boolean;
}

const AppSlider: FC<AppSliderProps> = (props) => {
  const installedApps = localStorage.getItem("hpInstalledApps");
  const [editMode, setEditMode] = useState(false);
  const [userApps, setUserApps] = useState<
    Array<{
      id: string;
      name: string;
      url: string;
    }>
  >([]);

  const getInstalledApps = () => {
    if (installedApps) {
      return JSON.parse(installedApps);
    } else {
      return [];
    }
  };
  const installApp = (appName: string, appUrl: string) => {
    setUserApps((apps) => [
      ...apps,
      { id: (userApps.length + 1).toString(), name: appName, url: appUrl },
    ]);
  };
  const uninstallApp = (appId: number) => {
    const newUserApps = [...userApps];
    newUserApps.splice(appId, 1);
    setUserApps(newUserApps);
  };
  const updateApp = (appId: number) => {
    const updatedAppName = prompt("Application Name:", userApps[appId].name);
    const updatedAppUrl = prompt("Application URL:", userApps[appId].url);
    if ((updatedAppName && updatedAppUrl) === "") {
      alert("Application Name/URL must not be blank.");
    } else if (updatedAppName && updatedAppUrl) {
      uninstallApp(appId);
      installApp(updatedAppName, updatedAppUrl);
    } else {
      return;
    }
  };
  const onMoveApp = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    const apps = Array.from(userApps);
    const [newAppOrder] = apps.splice(source.index, 1);
    apps.splice(destination.index, 0, newAppOrder);
    setUserApps(apps);
  };

  useEffect(() => {
    setUserApps(getInstalledApps());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem("hpInstalledApps", JSON.stringify(userApps));
  }, [userApps]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 m-12">
        <div
          className={`flex justify-between mb-2 ${
            props.darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          <div className="text-lg font-semibold">Your Apps:</div>
          <div className="flex text-lg font-semibold">
            Edit Mode:{" "}
            <div>
              <input
                className="ml-2"
                type="checkbox"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex">
          <DragDropContext onDragEnd={onMoveApp}>
            <Droppable droppableId="apps" direction="horizontal">
              {(provided) => (
                <div
                  className="flex"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {userApps.map((item, i) => (
                    <Draggable key={item.id} draggableId={item.id} index={i}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <AppButton
                            id={i}
                            name={item.name}
                            url={item.url}
                            editMode={editMode}
                            updater={updateApp}
                            uninstaller={uninstallApp}
                            darkMode={props.darkMode}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <AppInstaller registerApp={installApp} darkMode={props.darkMode} />
        </div>
      </div>
    </div>
  );
};

export default AppSlider;
