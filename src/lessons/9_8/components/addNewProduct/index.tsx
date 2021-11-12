import { ChangeEvent, FC, useState } from "react";

import useStyles from "./style";

enum FIELD_NAMES {
  name = "name",
  price = "price",
  quantities = "quantities",
}

const defaultProduct: NewObjFruit = {
  name: "",
  price: 0,
  quantities: 0,
  id: 0,
};

interface AddProductProps {
  handleUppdate: (a: NewObjFruit) => void;
  num: number;
}

const AddProduct: FC<AddProductProps> = ({ handleUppdate, num }) => {
  const classes = useStyles();

  const [product, setProduct] = useState<NewObjFruit>(defaultProduct);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newProduct: NewObjFruit = { ...product };
    const { name, value } = e.target;

    if (name === FIELD_NAMES.name) {
      newProduct[name] = value.substr(0, 13);
    }

    if (name === FIELD_NAMES.price || name === FIELD_NAMES.quantities) {
      newProduct[name] = Number(value.replace(/\D/g, "").substr(0, 5));
    }

    newProduct.id = num + 1;
    setProduct(newProduct);
  };

  const handlePostProduct = () => {
    let bool = true;
    Object.entries(product).map((item) => {
      if (!item[1]) return (bool = false);
    });

    if (bool) {
      handleUppdate(product);
      setProduct(defaultProduct);
    }
  };

  return (
    <div className={classes.root}>
      <span>Name</span>
      <input
        className="block"
        name={FIELD_NAMES.name}
        value={product.name}
        onChange={handleChangeValue}
        required
      />
      <span>Price</span>
      <input
        className="block"
        name={FIELD_NAMES.price}
        value={product.price ? product.price : ""}
        onChange={handleChangeValue}
        required
      />
      <label>
        <span>Quantity</span>
        <input
          className="block"
          value={product.quantities ? product.quantities : ""}
          name={FIELD_NAMES.quantities}
          onChange={handleChangeValue}
          required
        />
      </label>

      <button className="block" onClick={handlePostProduct}>
        Добавить
      </button>
    </div>
  );
};

export default AddProduct;
