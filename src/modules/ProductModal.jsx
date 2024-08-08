import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { API_URL } from '../const';
import { useCart } from '../context/CartContext';
import styleModal from './ProductModal.module.css';

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCart();

		useEffect(() => {
			document.body.style.overflow = isOpen ? 'hidden' : 'auto';
		}, [isOpen]);

	if (!data) {
		return null;
	}

	const handleDecrease = () => {
		if (quantity - 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};

	const handleAddToCart = () => {
		addToCart(data, quantity);
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={styleModal.modal}
			overlayClassName={styleModal.overlay}
			contentLabel={data.title}
		>
			<img
				className={styleModal.image}
				src={`${API_URL}${data.img}`}
				alt={data.title}
			/>

			<div className={styleModal.content}>
				<div className={styleModal.header}>
					<h2 className={styleModal.title}>{data.title}</h2>
					<p className={styleModal.price}>{data.price}&nbsp;₽</p>
				</div>

				<ul className={styleModal.list}>
					{Object.entries(data.additional).map(([key, value]) => (
						<li key={key} className={styleModal.item}>
							<span className={styleModal.field}>{key}:</span>
							<span className={styleModal.value}>{value}</span>
						</li>
					))}
				</ul>

				<div className={styleModal.footer}>
					<div className={styleModal.count}>
						<button
							className={styleModal.btn}
							onClick={handleDecrease}
						>
							<svg
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="35"
									height="35"
									rx="3.5"
									stroke="#B8B8B8"
								/>
								<rect
									x="12"
									y="17"
									width="12"
									height="2"
									fill="#1D1C1D"
								/>
							</svg>
						</button>
						<input
							className={styleModal.number}
							type="number"
							value={quantity}
							readOnly
						/>
						<button
							className={styleModal.btn}
							onClick={handleIncrease}
						>
							<svg
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="35"
									height="35"
									rx="3.5"
									stroke="#B8B8B8"
								/>
								<rect
									x="12"
									y="17.25"
									width="12"
									height="1.5"
									fill="#1D1C1D"
								/>
								<rect
									x="17.25"
									y="24"
									width="12"
									height="1.5"
									transform="rotate(-90 17.25 24)"
									fill="#1D1C1D"
								/>
							</svg>
						</button>
					</div>
					<button
						className={styleModal.btnAddCart}
						onClick={handleAddToCart}
					>
						Добавить
					</button>
				</div>
			</div>

			<button
				className={styleModal.btnCloseCard}
				onClick={onRequestClose}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="5.71228"
						y="14.1975"
						width="12"
						height="1.5"
						transform="rotate(-45 5.71228 14.1975)"
						fill="#B8B8B8"
					/>
					<rect
						x="14.1976"
						y="15.2582"
						width="12"
						height="1.5"
						transform="rotate(-135 14.1976 15.2582)"
						fill="#B8B8B8"
					/>
				</svg>
			</button>
		</Modal>
	);
};
