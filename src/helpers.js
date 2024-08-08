export const getActiveClass = (category) => {
	const currentCategory = new URLSearchParams(location.search).get(
		'category'
	);

	return currentCategory === category ? 'active' : '';
};
