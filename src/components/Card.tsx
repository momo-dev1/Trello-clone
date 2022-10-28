import { CardContainer } from "../styles/styles";

type CardProps = {
  text: string;
};

const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
