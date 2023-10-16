const failed = (failed) => {
	const state = document.querySelector(failed);
	state.classList.toggle('active');
	setTimeout(function () {
		state.classList.remove('active');
	}, 3000);
};

export default failed;
