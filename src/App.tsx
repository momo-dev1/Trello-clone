import { AppContainer } from "./styles/styles";
import { Column } from "./components/Column";
import AddNewItem from "./components/AddNewItem";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem
        toggleButtonText="+ add new list"
        onAdd={() => console.log("newadd")}
      />
    </AppContainer>
  );
};
