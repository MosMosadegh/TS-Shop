import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../Products.type";
import { CartContext } from "../../context/cartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Card({ id, title, image, price, rating }: Product) {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  const addToBasketHandler = () => {
    context.addProduct(id);

    Swal.fire({
      title: "محصول به سبد خریداضافه شد",
      // text: "محصول به سبد خریداضافه شد",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "اوکی",
      confirmButtonText: "رفتن به سبد",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };

  return (
    <div className="card">
      <img src={image} alt="" />
      <main>
        <p>{title.slice(0, 20)}...</p>
        <div className="card-details">
          <div>
            {Array(Math.ceil(rating.rate))
              .fill(0)
              .map(() => (
                <AiFillStar style={{ color: "orange" }} />
              ))}
            {Array(5 - Math.ceil(rating.rate))
              .fill(0)
              .map(() => (
                <AiOutlineStar style={{ color: "orange" }} />
              ))}
          </div>
          <p>{price}$</p>
        </div>
        <button onClick={addToBasketHandler}>Add to Basket</button>
      </main>
    </div>
  );
}

export default Card;
