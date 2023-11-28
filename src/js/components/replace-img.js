import TomSelect from 'tom-select';
import { exist } from '../utils/index';

const selectInit = () => {
	const SELECTORS = {
		wrapper: '.construct',
		selectDesign: '.js-select-design',
		selectSymbol: '.js-select-symbol',
		selectTapes: '.js-select-tapes',
		selectColor: '.js-select-color',
		imgTape: '.construct__img_w img',
		imgDesign: '.construct__img_print',
		imgSymbol: '.construct__img_symbol',
	};

	const CLASSNAMES = {};

	const $wrapper = document.querySelector(SELECTORS.wrapper);

	if (!exist($wrapper)) return;

	const $selectDesign = document.querySelector(SELECTORS.selectDesign);
	const $selectSymbol = document.querySelector(SELECTORS.selectSymbol);
	const $selectTapes = document.querySelector(SELECTORS.selectTapes);
	const $selectColor = document.querySelector(SELECTORS.selectColor);
	const $imgTape = document.querySelector(SELECTORS.imgTape);
	const $imgDesign = document.querySelector(SELECTORS.imgDesign);
	const $imgSymbol = document.querySelector(SELECTORS.imgSymbol);

	return null;
};

export default selectInit;
