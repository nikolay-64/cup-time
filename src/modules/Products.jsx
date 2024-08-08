import { useEffect } from 'react';
import { Product } from './Product';
import { useProducts } from '../context/ProductContext';
import { useSearchParams } from 'react-router-dom';

import { productTitles } from '../const';
import { useState } from 'react';
import { SkeletonLoader } from './SkeletonLoader';

export const Products = () => {
	const [seachParams] = useSearchParams();
	const { products, setCategory, productsRef } = useProducts();
	const category = seachParams.get('category');
	const [title, setTitle] = useState('');

	useEffect(() => {
		const productsTitle = productTitles.find(
			(item) => item.namecategory === category
		);
		setCategory(category);
		setTitle(productsTitle.nametitle);
	}, [category, setCategory]);

	return (
		<section className="products" id="#products" ref={productsRef}>
			<div className="container">
				<h2 className="products__title">{title}</h2>
				<ul className="products__list">
					{products.length ? (
						products.map((item) => <Product key={item.id} data={item} />)
					) : (
						<SkeletonLoader />
					)}
				</ul>
			</div>
		</section>
	);
};
