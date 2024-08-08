import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useEffect } from 'react';
import { getActiveClass } from '../helpers';

export const Header = () => {
	const { cart } = useCart();
	const { categories } = useProducts();
	const [isMenuOpen, setIsOpenMenu] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
	}, [isMenuOpen])

	const closeMenu = () => {
		setIsOpenMenu(false);
	};
	const openMenu = () => {
		setIsOpenMenu(true);
	};

	return (
		<header className="header">
			<div className="container header__container">
				<Link to="/" className="header__logo-link">
					<img src="./img/logo.svg" alt="Логотип Cup Time" />
				</Link>

				<nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
					<ul className="header__menu">
						{Object.entries(categories).map(([key, value]) => (
							<li key={key} className="header__menu-item">
								<Link
									className={`header__menu-link ${getActiveClass(key)}`}
									to={`/products?category=${key}`}
									onClick={closeMenu}>
									{value}
								</Link>
							</li>
						))}
					</ul>

					<button className="header__close-btn" onClick={closeMenu} aria-label='Закрыть меню'>
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.28174 7.07532L21.4239 21.2175L20.7168 21.9246L6.57463 7.78242L7.28174 7.07532Z"
								fill="#D9D9D9"
							/>
							<path
								d="M6.5752 21.2173L20.7173 7.07515L21.4244 7.78226L7.2823 21.9244L6.5752 21.2173Z"
								fill="#D9D9D9"
							/>
						</svg>
					</button>
				</nav>

				<div className="header__control">
					<Link className="header__cart-link" to="cart">
						{cart
							? cart.reduce((acc, item) => acc + item.quantity, 0)
							: 0}
					</Link>

					<button
						className="header__burger"
						aria-label="Открыть меню"
						onClick={openMenu}
					>
						<svg
							width="28"
							height="29"
							viewBox="0 0 28 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="4"
								y="9.5"
								width="20"
								height="1"
								fill="#D9D9D9"
							/>
							<rect
								x="4"
								y="14.5"
								width="20"
								height="1"
								fill="#D9D9D9"
							/>
							<rect
								x="4"
								y="19.5"
								width="20"
								height="1"
								fill="#D9D9D9"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};
