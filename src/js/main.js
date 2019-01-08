import './vendor';

(function () {
	const MAX_SKILL_LVL = 1000;
	const SKILL_LVL = 671;

	const arrow = document.getElementById('js-arrow');
	const value = document.querySelector('.js-value');
	const cntColors = ['is-yellow', 'is-green', 'is-blue'];

	let tempSkillLvl = 0;
	let tempCntColorNum = -1;

	arrow.style.transformOrigin = '130px 130px';

	const colorUpdate = (number) => {
		value.classList.remove(...cntColors);
		value.classList.add(cntColors[number]);
	};

	const changeLvl = (skillLvl) => {
		arrow.style.transform = `rotate(${skillLvl * 180 / MAX_SKILL_LVL}deg)`;
		value.textContent = skillLvl;
		if (tempCntColorNum < skillLvl / MAX_SKILL_LVL * cntColors.length) {
			colorUpdate(tempCntColorNum++);
		}
	};

	setInterval(() => {
		changeLvl(tempSkillLvl <= SKILL_LVL ? tempSkillLvl++ : tempSkillLvl--);
	}, 10);
})();
