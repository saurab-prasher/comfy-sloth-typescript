import React from "react";
import sampleImg from "../../images/bookshelf-low-res.jpg";
import {
  CartContainer,
  CartContainerHeadings,
  CartItem,
  CartItemImgContainer,
  CartItemBtnContainer,
  CartItemTotal,
} from "./CartElements";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  return (
    <CartContainer>
      <CartContainerHeadings>
        <div>
          <p>Item</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Subtotal</p>
        </div>
      </CartContainerHeadings>
      <hr />
      <CartItem>
        <CartItemImgContainer>
          <img src={sampleImg} alt="" />

          <h3>Entertainment Center</h3>
          <p>Color : </p>
        </CartItemImgContainer>
        <div>$599.00</div>

        <div>- 1 +</div>

        <div>$599</div>

        <div>
          <button>
            <RiDeleteBinLine />
          </button>
        </div>
      </CartItem>

      <hr />
      <CartItemBtnContainer>
        <button>Continue Shopping</button>
        <button>Clear Shopping Cart</button>
      </CartItemBtnContainer>

      <CartItemTotal>
        <h3>Subtotal: $1030.97</h3>
        <p>Shipping Fee: $5.34</p>

        <h2>Order Total : $1,036.31</h2>
        <button>Login</button>
      </CartItemTotal>
    </CartContainer>
  );
};

export default Cart;
