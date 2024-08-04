import { useEffect } from 'react';
import { Product } from './Product';
import { useProducts } from '../context/ProductContext';
import { useSearchParams } from 'react-router-dom';

import { productTitles } from '../const';
import { useState } from 'react';

export const Products = () => {
	const [seachParams] = useSearchParams();
	const { products, setCategory } = useProducts();
	const category = seachParams.get('category');
	const [title, setTitle] = useState('');

	useEffect(() => {
		const productsTitle = productTitles.find(item => item.namecategory 
			=== category);
		setCategory(category);
		setTitle(productsTitle.nametitle);
	}, [category, setCategory]);

	return (
		<section className="products">
			<div className="container">
				<h2 className="products__title">{title}</h2>
				<ul className="products__list">
					{products.map((item) => (
						<Product key={item.id} data={item} />
					))}
				</ul>
			</div>
		</section>
	);
};
