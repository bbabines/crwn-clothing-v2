import { useContext } from "react";

import { CartContext } from "../contexts/cart.context";

import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-icon.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} CartItem={item} />
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
