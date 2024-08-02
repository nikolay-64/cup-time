import { products } from "../products";
import { CartItem } from "./Cartitem";

export const Cart = () => (
	<section className="cart">
		<div className="container cart__container">
			<h2 className="cart__title">Корзина (6)</h2>

			<ul className="cart__items">
				{products.map((item) => (
					<CartItem key={item.id} data={item} />
				))}
			</ul>

			<div className="card__summary">
				<h3 className="cart__summary-title">Итого:</h3>
				<p className="cart__total">2200&nbsp;₽</p>
				<button className="cart__order-button">Заказать</button>
			</div>
		</div>
	</section>
);