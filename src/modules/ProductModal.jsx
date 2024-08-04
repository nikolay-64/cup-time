import { useState } from 'react';
import Modal from 'react-modal';
import { API_URL } from '../const';
import { useCart } from '../context/CartContext';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		background: '#f2f9f7',
		flexDirection: 'column',
    	alignItems: 'flex-start',
	},
};

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCart();

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
			style={customStyles}
			contentLabel="Product Modal"
		>
			<img src={`${API_URL}${data.img}`} alt={data.title} />
			<div className="modal__content-wrapper">
				<h3 className="modal__title">{data.title}</h3>
				<p className="modal__price">{data.price} ₽</p>
				<ul className="modal__desc">
					{Object.entries(data.additional).map(([key, value]) => (
						<li className="modal__desc-item" key={key}>
							<span>{key}:</span> <span>{value}</span>
						</li>
					))}
				</ul>

				<div>
					<div className="modal-item__quantity">
						<button className="modal-item__quantity-button modal-item__quantity-button__minus " onClick={handleDecrease}></button>
						<input className="modal-item__quantity-input" type="number" value={quantity} readOnly />
						<button className="modal-item__quantity-button modal-item__quantity-button__plus" onClick={handleIncrease}></button>
					</div>
				<button className="modal__add-button" onClick={handleAddToCart}>
				Добавить в корзину
				</button>
				</div>
			</div>




			<button
				className="modal__close-button"
				onClick={onRequestClose}
			></button>
		</Modal>
	);
};
