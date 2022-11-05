import { createContext, FC, Dispatch, useContext } from "react";
import { Task, List, AppState, appStateReducer } from "./reducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";

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
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: String) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppGlobalState = () => {
  return useContext(AppStateContext);
};
