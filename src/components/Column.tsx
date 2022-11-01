import { useAppGlobalState } from "../context";
import { ColumnContainer, ColumnTitle } from "../styles/styles";
import AddNewItem from "./AddNewItem";
import Card from "./Card";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId } = useAppGlobalState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ add new card"
        onAdd={() => console.log("newadd")}
        dark
      />
    </ColumnContainer>
  );
};
