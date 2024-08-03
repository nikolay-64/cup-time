import Modal from 'react-modal';
import { API_URL } from '../const';

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
	},
};

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
	if (!data) {
		return null;
	}

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
			</div>
			<button
				className="modal__close-button"
				onClick={onRequestClose}
			></button>
		</Modal>
	);
};
