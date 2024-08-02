export const CartItem = ({ data }) => (
	<li className="cart-item">
		<img className="cart-item__image" src={data.image} alt={data.title} />

		<div className="cart-item__info">
			<h3 className="cart-item__title">{data.title}</h3>
			<div className="cart-item__quantity">
				<button className="cart-item__quantity-button cart-item__quantity-button cart-item__quantity-button__minus"></button>
				<input
					className="cart-item__quantity-input"
					type="number"
					value={1}
				/>
				<button className="cart-item__quantity-button cart-item__quantity-button cart-item__quantity-button__plus"></button>
			</div>
			<p className="cart-item__price">{data.price}&nbsp;₽</p>
		</div>
	</li>
);