import { CardContainer } from "../styles/styles";

type CardProps = {
  id: string;
  text: string;
};

const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
