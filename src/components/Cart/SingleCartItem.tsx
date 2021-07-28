import { formatPrice } from '../../utils/helper';

import {
  CartItem,
  CartItemImgContainer,
  Price,
  SubTotal,
  Delete,
  DeleteBtn,
  CartColorBtn,
} from './CartElements';

import ChangeItemAmount from './ChangeQuantity';

interface SingleCartProps {
  cart: any;
  increase: any;
  decrease: any;
  deleteItem: any;
}

const SingleCartItem: React.FC<SingleCartProps> = ({
  cart,
  increase,
  decrease,
  deleteItem,
}) => {
  return cart?.map((item: any) => {
    const { id, name, price, image, color, amount } = item;

    return (
      <CartItem key={id}>
        <CartItemImgContainer>
          <img src={image} alt='' />
          <div>
            <h3>{name}</h3>
            <p>
              Color :<CartColorBtn background={color}></CartColorBtn>
            </p>
          </div>
        </CartItemImgContainer>
        <Price>
          <p>{formatPrice(price)}</p>
        </Price>
        <ChangeItemAmount
          amount={amount}
          id={id}
          singleProduct={item}
          increase={increase}
          decrease={decrease}
        />
        <SubTotal>
          <p>{formatPrice(price * amount)}</p>
        </SubTotal>
        <Delete>
          <DeleteBtn onClick={() => deleteItem(id)} />
        </Delete>
      </CartItem>
    );
  });
};

export default SingleCartItem;
