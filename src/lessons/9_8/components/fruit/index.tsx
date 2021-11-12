import { FC } from "react";

interface Fruit {
  name: string;
  price: number;
  quantities: number;
}

interface FruitProps {
  item: Fruit;
  removeItem: () => void;
}

const Fruit: FC<FruitProps> = ({ item, removeItem }) => {
  const { name, price, quantities } = item;

  const deleteFruit = () => {
    removeItem();
  };

  return (
    <>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantities}</td>
      <td>{price * quantities}</td>
      <td>
        <button onClick={deleteFruit}>Удалить продукт</button>
      </td>
    </>
  );
};

export default Fruit;
