import React from "react";
import { ProductListContainer, ProductListSection } from "./ProductElements";
import Card from "../Card/";
import Data from "../../Data";

const ProductList = () => {
  return (
    <ProductListContainer>
      <aside style={{ backgroundColor: "blue" }}>
        <div className="form">
          <form>
            <input type="text" />
          </form>
        </div>

        <div className="category">
          <h3>Category</h3>
          <button>All</button>
          <button>Office</button>
          <button>buttonving Room</button>
          <button>Kitchen</button>
          <button>Bedroom</button>
          <button>Dining</button>
          <button>Kids</button>
        </div>

        <div className="company">
          <h3>Company</h3>

          <select name="company" id="company">
            <option value="all">all</option>
            <option value="marcos">marcos</option>
            <option value="liddy">liddy</option>
            <option value="ikea">ikea</option>
            <option value="caressa">caressa</option>
          </select>
        </div>

        <div className="color">colors</div>

        <div className="price">
          <input type="range" name="price" id="price" />
        </div>

        <div className="free-shipping"></div>
        <div className="clear">
          <button>Clear Filters</button>
        </div>
      </aside>

      <section>
        <p>{Data.length} Products Found</p>
        <ProductListSection>
          {Data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </ProductListSection>
      </section>
    </ProductListContainer>
  );
};

export default ProductList;
