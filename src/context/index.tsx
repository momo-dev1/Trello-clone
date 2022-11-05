import { createContext, FC, useContext } from "react";
import { Task, List, AppState } from "./reducer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "t1", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "t2", text: "Learn TypeScript" }],
    },
    {
      id: "3",
      text: "Done",
      tasks: [{ id: "t3", text: "Begin to use static typing" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: String): Task[];
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC = ({ children }) => {
  const { lists } = appData;

  const getTasksByListId = (id: String) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppGlobalState = () => {
  return useContext(AppStateContext);
};
