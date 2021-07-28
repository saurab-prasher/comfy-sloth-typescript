import { useState } from 'react';

import { AddToCartContainer, AddToCartBtn } from './AddToCartElements';
import ColorsContainer from './ColorsContainer';
import ChangeItemAmount from '../Cart/ChangeQuantity';

import { useActions } from '../../hooks/useActions';

interface Product {
  id: any;
  colors: string[];
  stock: number;
}
interface AddToCartProps {
  product: Product;
}

export const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const { addToCart } = useActions();
  const { id, colors, stock } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleMainColor = (color: any) => {
    setMainColor(color);
  };

  const handleAmount = (id = 0, value: any) => {
    if (value === 'increase' && amount < stock) {
      setAmount(amount + 1);
    }
    if (value === 'decrease' && amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <AddToCartContainer>
      <ColorsContainer
        colors={colors}
        mainColor={mainColor}
        handleMainColor={handleMainColor}
      />

      <ChangeItemAmount
        id={id}
        singleProduct={true}
        amount={amount}
        decrease={handleAmount}
        increase={handleAmount}
      />
      <AddToCartBtn
        onClick={() => addToCart(id, mainColor, amount, product)}
        to='/cart'
      >
        Add to Cart
      </AddToCartBtn>
    </AddToCartContainer>
  );
};

export default AddToCart;
