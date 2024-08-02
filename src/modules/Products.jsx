import { useEffect } from 'react';
import { Product } from './Product';
import { useProducts } from '../context/ProductContext';

export const Products = () => {
	const { products, setCategory} = useProducts();
	const category = 'tea';
	
	useEffect(() => {
		setCategory(category);
	}, [category, setCategory]);
	
	return (
	<section className="products">
		<div className="container">
			<h2 className="products__title">Чай</h2>

			<ul className="products__list">
				{products.map((item) => (
					<Product key={item.id} data={item} />
				))}
			</ul>
		</div>
	</section>
);}
