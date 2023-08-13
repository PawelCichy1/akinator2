const questions = document.querySelector('.questions');
const answer = document.querySelector('.answer');
const person = document.querySelector('.person');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const renew = document.querySelector('.renew');

const a = 'Czy ta osoba jest dorosła?';

const ab = 'Czy ta osoba mieszka w Polsce?';
const abc = 'Czy ta osoba ma więcej niż 50 lat?';
const abcd = 'Czy ta osoba to mężczyna?';
const abcde = 'Czy ta osoba ma audi ?';
const abcdef = 'czy ta osoba pracuje na budowie?';
const abcdefg = 'czy ta osoba jest bardzo przystojna?';
const abcdefgh = 'Czy ta osoba jest gejem?';
const abcdefghi = 'czy ta osoba jest na Teneryfie?';
const abcdefghij = 'czy ta osoba jest nauczycielem w Przedszkolu';
const abcdefghijk = 'Czy ta osoba uczy Angielskiego?';
const abcdefghijkl = 'Czy tej osobie wypadło kiedyś kolano?';
const abcdefghijklm = 'Czy ta osoba ma kota?';
const abcdefghijklmn = 'Czy ta osoba umie strzyc włosy?';

const ba = 'Czy ta osoba jest potocznie nazywana Gackiem?';
const bb = 'Czy ta osoba gra w pilkę jak Messi?';
const bc = 'Czy ta osoba jest na Wyspie?';
const bd = 'Czy ta osoba jest w Niemczech?';
const be = 'Czy ta osoba lub grać w Roblox?';
const bf = 'Czy tej osobie wypadł już jakiś ząb?';
const bg = 'Czy ta osoba chodzi do szkoły?';
const bh = 'Czy ta osoba ma psa?';

const adult = [
	ab,
	abc,
	abcd,
	abcde,
	abcdef,
	abcdefg,
	abcdefgh,
	abcdefghi,
	abcdefghij,
	abcdefghijk,
	abcdefghijkl,
	abcdefghijklm,
	abcdefghijklmn,

	ba,
	bb,
	bc,
	bd,
	be,
	bf,
	bg,
	bh,
];

const check = [];

const generateQuestion = () => {
	const number = Math.floor(Math.random() * adult.length);
	console.log(adult.length);
	console.log(check);
	console.log(number);
	score();
	questions.textContent = adult[number];

	check.push(number);
	if (check.includes(number)) {
		adult.splice(number, 1);
	}
};

const przemo = [];
const miki = [];
const pawel = [];
const mama = [];
const Adam = [];
const lola = [];
const misia = [];
const natek = [];
const dusia = [];
const bartek = [];

const family = [
	przemo,
	miki,
	pawel,
	mama,
	Adam,
	lola,
	misia,
	natek,
	dusia,
	bartek,
];

const score = () => {
	if (
		questions.textContent == 'Czy ta osoba mieszka w Polsce?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		pawel.push(1);
		mama.push(1);
		misia.push(1);
		dusia.push(1);
		bartek.push(1);
		lola.push(1);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba mieszka w Polsce?' &&
		answer.value.toLowerCase() == 'nie'
	) {
		przemo.push(20);
		Adam.push(33);
	} else if (
		questions.textContent == 'Czy ta osoba ma więcej niż 50 lat?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		mama.push(1, 2);
		Adam.push(1, 2);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba to mężczyna?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		pawel.push(2);
		przemo.push(1);
		Adam.push(3);
		bartek.push(2);

		answer.value.toLowerCase() = '';
	} else if (
		questions.textContent == 'Czy ta osoba ma audi ?' &&
		answer.value == 'tak'
	) {
		przemo.push(4, 5);
		lola.push(2, 3);
		answer.value = '';
	} else if (
		questions.textContent == 'czy ta osoba pracuje na budowie?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		przemo.push(11, 13);
		Adam.push(4, 5);
		answer.value = '';
	} else if (
		questions.textContent == 'czy ta osoba jest bardzo przystojna?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		pawel.push(3);
	} else if (
		questions.textContent == ' Czy ta osoba jest gejem?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		przemo.push(7, 8, 9);

		answer.value = '';
	} else if (
		questions.textContent == 'czy ta osoba jest na Teneryfie?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		misia.push(3, 4, 5);

		answer.value = '';
	} else if (
		questions.textContent == 'czy ta osoba jest nauczycielem w Przedszkolu' &&
		answer.value.toLowerCase() == 'tak'
	) {
		misia.push(6);
		dusia.push(6);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba uczy Angielskiego?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		dusia.push(7, 8, 9);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy tej osobie wypadło kiedyś kolano?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		bartek.push(4, 5, 6);

		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba ma kota?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		bartek.push(8);
		dusia.push(9);
		mama.push(4);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba umie strzyc włosy?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		lola.push(20, 25, 28);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba jest potocznie nazywana Gackiem?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		natek.push(20, 25, 28);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba gra w pilkę jak Messi?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		miki.push(20, 25, 28, 23);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba jest na Wyspie?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		miki.push(1, 2);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba jest w Niemczech?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		natek.push(1, 2);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba lub grać w Roblox?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		natek.push(3);
		miki.push(3);
		answer.value = '';
	} else if (
		questions.textContent == 'Czy tej osobie wypadł już jakiś ząb?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		natek.push(4, 5);

		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba chodzi do szkoły?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		natek.push(6, 7);

		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba ma psa?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		miki.push(8, 9);

		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba jest dorosła?' &&
		answer.value.toLowerCase() == 'tak'
	) {
		adult.splice(13, 8);

		answer.value = '';
	} else if (
		questions.textContent == 'Czy ta osoba jest dorosła?' &&
		answer.value.toLowerCase() == 'nie'
	) {
		adult.splice(0, 13);

		answer.value = '';
	}

	let winner = '';

	if (
		bartek.length > mama.length &&
		bartek.length > dusia.length &&
		bartek.length > misia.length &&
		bartek.length > przemo.length &&
		bartek.length > pawel.length &&
		bartek.length > Adam.length
	) {
		winner = 'Bartek';
	} else if (
		mama.length > bartek.length &&
		mama.length > dusia.length &&
		mama.length > misia.length &&
		mama.length > przemo.length &&
		mama.length > pawel.length &&
		mama.length > Adam.length
	) {
		winner = 'Ula';
	} else if (
		pawel.length > mama.length &&
		pawel.length > dusia.length &&
		pawel.length > misia.length &&
		pawel.length > przemo.length &&
		pawel.length > bartek.length &&
		pawel.length > Adam.length
	) {
		winner = 'pawel';
	} else if (
		dusia.length > mama.length &&
		dusia.length > bartek.length &&
		dusia.length > misia.length &&
		dusia.length > przemo.length &&
		dusia.length > pawel.length &&
		dusia.length > Adam.length
	) {
		winner = 'dusia';
	} else if (
		Adam.length > mama.length &&
		Adam.length > dusia.length &&
		Adam.length > misia.length &&
		Adam.length > przemo.length &&
		Adam.length > pawel.length &&
		Adam.length > bartek.length
	) {
		winner = 'Adam';
	} else if (
		misia.length > mama.length &&
		misia.length > dusia.length &&
		misia.length > bartek.length &&
		misia.length > przemo.length &&
		misia.length > pawel.length &&
		misia.length > Adam.length
	) {
		winner = 'Misia';
	} else if (
		lola.length > mama.length &&
		lola.length > dusia.length &&
		lola.length > misia.length &&
		lola.length > przemo.length &&
		lola.length > pawel.length &&
		lola.length > Adam.length &&
		lola.length > bartek.length
	) {
		winner = 'lola';
	} else if (
		przemo.length > bartek.length &&
		przemo.length > dusia.length &&
		przemo.length > Adam.length &&
		przemo.length > mama.length &&
		przemo.length > pawel.length &&
		przemo.length > lola.length &&
		przemo.length > misia.length
	) {
		winner = 'Przemo';
	} else if (
		miki.length > bartek.length &&
		miki.length > dusia.length &&
		miki.length > Adam.length &&
		miki.length > mama.length &&
		miki.length > pawel.length &&
		miki.length > lola.length &&
		miki.length > misia.length &&
		miki.length > natek.length
	) {
		winner = 'Miki';
	} else if (
		natek.length > bartek.length &&
		natek.length > dusia.length &&
		natek.length > Adam.length &&
		natek.length > mama.length &&
		natek.length > pawel.length &&
		natek.length > lola.length &&
		natek.length > misia.length &&
		natek.length > miki.length
	) {
		winner = 'Natek';
	}

	family.forEach((li) => {
		if (li.length > 4) {
			person.textContent = `Ta osoba to ${winner}`;
			questions.style.display = 'none';
			btn.style.display = 'none';
			btn2.style.display = 'none';
			renew.style.display = 'block';

			renew.addEventListener('click', reloader);
		}
	});
};

const reloader = () => {
	return setTimeout(location.reload(), 1000 * 1000);
};

const first = () => {
	answer.value = '';
	questions.textContent = 'Czy ta osoba jest dorosła?';
	btn.style.display = 'block';
	btn2.style.display = 'none';

	btn.addEventListener('click', generateQuestion);
};

btn2.addEventListener('click', first);
