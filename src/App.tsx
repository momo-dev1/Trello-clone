import { AppContainer } from "./styles/styles";
import { Column } from "./components/Column";
import AddNewItem from "./components/AddNewItem";
import { useAppGlobalState } from "./context";

export const App = () => {
  const { lists } = useAppGlobalState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}

      <AddNewItem
        toggleButtonText="+ add new list"
        onAdd={() => console.log("newadd")}
      />
    </AppContainer>
  );
};
