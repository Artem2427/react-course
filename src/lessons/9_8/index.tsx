import { useEffect, useState, ChangeEvent } from "react";

import Fruit from "./components/fruit";
import AddProduct from "./components/addNewProduct";

import useStyles from "./style";

const Lesson9_8 = () => {
  const classes = useStyles();

  const [listCheckbox, setListCheckbox] = useState([
    { id: 1, isChecked: true },
    { id: 2, isChecked: true },
    { id: 3, isChecked: true },
  ]);

  const [listFruits, setListFruits] = useState([
    { name: "lemon", price: 20, quantities: 3, id: 1 },
    { name: "apple", price: 10, quantities: 10, id: 2 },
    { name: "pamelo", price: 50, quantities: 1, id: 3 },
  ]);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let allPay = 0;
    listFruits.forEach((item, i) => {
      if (item.id === listCheckbox[i].id && listCheckbox[i].isChecked) {
        allPay += item.price * item.quantities;
      } else {
        allPay += 0;
      }
    });
    setSum(allPay);
  }, [listFruits, listCheckbox]);

  const removeItem = (index: number) => {
    const newList = [...listFruits];
    newList.splice(index, 1);

    const copyList = [...listCheckbox];
    copyList.splice(index, 1);

    setListCheckbox(copyList);
    setListFruits(newList);
  };

  const addNewFruit = (newFruit: NewObjFruit) => {
    const newList = [...listFruits, newFruit];
    const newListCheckbox = [
      ...listCheckbox,
      { id: listFruits.length + 1, isChecked: true },
    ];

    setListCheckbox(newListCheckbox);
    setListFruits(newList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newArr = [...listCheckbox];
    const obj = newArr.find((item) => item.id === Number(e.target.id));

    if (obj) {
      obj.isChecked = !obj.isChecked;
      newArr.forEach((item) =>
        item.id === obj.id ? (item = obj) : (item = item)
      );
    }

    setListCheckbox(newArr);
  };

  return (
    <div className={classes.root}>
      <table className="table">
        <thead>
          <tr>
            <td />
            <td>Название</td>
            <td>Цена</td>
            <td>Количество</td>
            <td>Сумма</td>
          </tr>
        </thead>
        <tbody>
          {listFruits.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  id={String(listCheckbox[index].id)}
                  type="checkbox"
                  checked={listCheckbox[index].isChecked}
                  onChange={handleChange}
                />
              </td>
              <Fruit item={item} removeItem={() => removeItem(index)} />
            </tr>
          ))}
        </tbody>
      </table>
      {sum && <p>Сума продуктов - {sum}</p>}
      <AddProduct handleUppdate={addNewFruit} num={listFruits.length} />
    </div>
  );
};

export default Lesson9_8;
