// import 'tom-select/dist/css/tom-select.css';
import imageColor from 'components/image-color';
import 'ScssComponents/universal/tom-select.scss';
import TomSelect from 'tom-select';
import { exist } from '../utils/index';

const selectInit = () => {
	const SELECTORS = {
		wrapper: '.js-select-wrapper',
		design: '.js-select-filter-design',
		symbol: '.js-select-filter-symbol',
		print: '.js-select-filter-print',
		color: '.js-select-filter-color',
		printImg: '.construct__img_w img',
	};

	const CLASSNAMES = {};

	const $wrapper = document.querySelector(SELECTORS.wrapper);
	const $design = document.querySelector(SELECTORS.design);
	const $symbol = document.querySelector(SELECTORS.symbol);
	const $print = document.querySelector(SELECTORS.print);
	const $color = document.querySelector(SELECTORS.color);
	const $printImg = document.querySelector(SELECTORS.printImg);

	if (!exist($wrapper)) return null;

	const initDesign = new TomSelect($design, {
		create: false,
		searchEnabled: false,
		render: {
			// eslint-disable-next-line
			option: function (data, escape) {
				return `<div class="search_bar__select_option_item" ><img class="search_bar__select_icon" src="${data.design}">${data.text}</div>`;
			},
			// eslint-disable-next-line
			item: function (item, escape) {
				return `<div class="search_bar__select_option_item" ><img class="search_bar__select_icon" src="${item.design}">${item.text}</div>`;
			},
		},
	});

	const initSymbol = new TomSelect($symbol, {
		create: false,
		searchEnabled: false,
		render: {
			// eslint-disable-next-line
			option: function (data, escape) {
				return `<div class="search_bar__select_option_item" ><img class="search_bar__select_icon" src="${data.symbol}">${data.text}</div>`;
			},
			// eslint-disable-next-line
			item: function (item, escape) {
				return `<div class="search_bar__select_option_item" ><img class="search_bar__select_icon" src="${item.symbol}">${item.text}</div>`;
			},
		},
	});

	const initPrint = new TomSelect($print, {
		create: false,
		searchEnabled: false,
		render: {
			// eslint-disable-next-line
			option: function (data, escape) {
				return `<div class="search_bar__select_option_item" ><img class="search_bar__select_icon" src="${data.tape}">${data.text}</div>`;
			},
			// eslint-disable-next-line
			item: function (item, escape) {
				return `<div class="search_bar__select_option_item" ><img class="search_bar__select_icon" src="${item.tape}">${item.text}</div>`;
			},
		},
	});

	initPrint.on('change', (value) => {
		// eslint-disable-next-line
		$printImg.src = value;
		console.log(value);
	});

	const initColor = new TomSelect($color, {
		create: false,
		searchEnabled: false,
		render: {
			// eslint-disable-next-line
			option: function (data, escape) {
				// eslint-disable-next-line
				return `<div class="search_bar__select_option_item" style="background-color: ${data.color}"><div class="search_bar__select_color  ></div></div>`;
			},
			// eslint-disable-next-line
			item: function (data, escape) {
				// eslint-disable-next-line
				return `<div class="search_bar__select_option_item" style="background-color: ${data.color}"><div class="search_bar__select_color"  ></div></div>`;
			},
		},
	});

	initColor.on('change', (value) => {
		imageColor('.construct__img_print', initDesign.getValue(), value);
		imageColor('.construct__img_symbol', initSymbol.getValue(), value);
	});

	initDesign.on('change', (value) => {
		imageColor('.construct__img_print', initDesign.getValue(), initColor.getValue());
		imageColor('.construct__img_symbol', initSymbol.getValue(), initColor.getValue());
	});

	initSymbol.on('change', (value) => {
		imageColor('.construct__img_print', initDesign.getValue(), initColor.getValue());
		imageColor('.construct__img_symbol', initSymbol.getValue(), initColor.getValue());
	});

	imageColor('.construct__img_symbol', initSymbol.getValue(), initColor.getValue());
	imageColor('.construct__img_print', initDesign.getValue(), initColor.getValue());

	return null;
};

export default selectInit;
