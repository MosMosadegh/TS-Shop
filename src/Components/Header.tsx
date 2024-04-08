import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function Header() {
  const cart = useContext(CartContext);

  return (
    <header>
      <NavLink className="logo" to="/">
        Mostafa Shop
      </NavLink>
      <NavLink to="/cart">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>{cart.UserCart.length}</span>
      </NavLink>
    </header>
  );
}

export default Header;
