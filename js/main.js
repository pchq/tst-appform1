webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(131);

(function () {
	var MAX_SKILL_LVL = 1000;
	var SKILL_LVL = 671;

	var arrow = document.getElementById('js-arrow');
	var value = document.querySelector('.js-value');
	var cntColors = ['is-yellow', 'is-green', 'is-blue'];

	var tempSkillLvl = 0;
	var tempCntColorNum = -1;

	arrow.style.transformOrigin = '130px 130px';

	var colorUpdate = function colorUpdate(number) {
		var _value$classList;

		(_value$classList = value.classList).remove.apply(_value$classList, cntColors);
		value.classList.add(cntColors[number]);
	};

	var changeLvl = function changeLvl(skillLvl) {
		arrow.style.transform = 'rotate(' + skillLvl * 180 / MAX_SKILL_LVL + 'deg)';
		value.textContent = skillLvl;
		if (tempCntColorNum < skillLvl / MAX_SKILL_LVL * cntColors.length) {
			colorUpdate(tempCntColorNum++);
		}
	};

	setInterval(function () {
		changeLvl(tempSkillLvl <= SKILL_LVL ? tempSkillLvl++ : tempSkillLvl--);
	}, 10);
})();

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(132);

var _svg4everybody = __webpack_require__(333);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _jquery = __webpack_require__(334);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.$ = _jquery2.default;
window.jQuery = _jquery2.default;

__webpack_require__(335);

/***/ })

},[130]);
//# sourceMappingURL=main.js.map