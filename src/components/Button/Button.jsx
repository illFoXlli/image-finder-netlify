import { Btn } from './Button.styled';

const Button = ({ nextPage }) => {
  return <Btn onClick={nextPage}>Load more</Btn>;
};

export default Button;
