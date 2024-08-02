import { API_URL } from "../const";

export const Product = ({ data }) => {
	return (
		<li className="products__item">
			<article className="product">
				<img
					className="product__img"
					src={`${API_URL}${data.img}`}
					alt={data.title}
				/>
				<div className="product__content">
					<h3 className="product__title">{data.title}</h3>
					<p className="product__price">{data.price} ₽</p>
				</div>
			</article>
		</li>
	);
};
