var deck = [];
var dealer = [];
var player = [];


function clearHands() {
	dealer = [];
	player = [];
}

function addDeck() {
	suits = ['H', 'D', 'C', 'S'];
	for (let i = 1; i < 14; ++i) {
		for (let s = 0; s < 4; ++s) {
			deck.push(i + suits[s]);
		}
	}
}

function generateDecks(num) {
	if (num) {
		for (; num > 0; num--) {
			addDeck();
		}
	}
	else
		addDeck();
}

function popCard() {
	return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
}

function dealHand(hand) {
	if (!hand) {
		console.log(" == dealHand(hand) faulted with invalid argument");
	}
	if (deck.length < 53)
		addDeck();
	hand.push(popCard());
}

function dealCards() {
	clearHands();
	if (deck.length < 53)
		generateDecks();
	for (let i = 0; i < 2; ++i) {
		dealHand(player);
		dealHand(dealer);
	}
}

function count(hand) {
	if (!hand) {
		console.log(" == count(hand) faulted with invalid argument");
	}
	let sum = 0;
	if (hand.length == 2) {
		if (parseInt(hand[0].slice(0, -1)) == 1 && parseInt(hand[1].slice(0, -1)) >= 10 ||
			parseInt(hand[0].slice(0, -1)) >= 10 && parseInt(hand[1].slice(0, -1)) == 1) {
			return 21;
		}
	}
	for (let i = 0; i < hand.length; ++i) {
		let n = parseInt(hand[i].slice(0, -1));
		if (n > 10) {
			sum += 10;
		}
		else {
			sum += n;
		}
	}
	for (let i = 0; i < hand.length; ++i) {
		let n = parseInt(hand[i].slice(0, -1));
		if (n == 1) {
			if (sum + 10 <= 21)
				sum += 10;
			else
				break;
		}
	}
	return sum;
}

function compHand(player, dealer) {
	if (!player || !dealer) {
		console.log(" == compHand(player, dealer) faulted with invalid argument(s)");
	}
	let playerPoints = count(player);
	let dealerPoints = count(dealer);
	if (playerPoints > 21) {
		return 1;
	}
	if (dealerPoints > 21) {
		return -1;
	}
	if (playerPoints == dealerPoints) {
		return 0;
	}
	if (playerPoints > dealerPoints) {
		return -1;
	}
	if (playerPoints < dealerPoints) {
		return 1;
	}
}

function dealerBot() {
	while (count(dealer) < 21 && compHand(player, dealer) == -1) {
		dealHand(dealer);
	}
	updateCards();
}

function evaluateWin() {
	switch (compHand(player, dealer)) {
		case 1:
			// balance -= betAmount;
			alert("Dealer won $" + betAmount);
			break;
		case -1:
			balance += betAmount * 2;
			alert("You've won $" + betAmount);
			break;
		default:
			balance += betAmount
			alert("Tied Hands!");

	}
}

/******************************** deck functions ******************************************
 * dealCards()				- clear hands then deal cards to player and dealer
 * dealHand(hand)				- deal 1 card to selected hand
 * count(hand)				- returns total count of hand
 * generateDecks(n) 		- adds n decks onto deck, default n = 1
 * compHand(player, dealer)	- return -1, 0, 1 as player win, tie, dealer win respectively
 *****************************************************************************************/

function updateBalance() {
	document.querySelector('#balance').textContent = '$' + balance;
}

function updateBetAmount() {
	document.querySelector('#bet-amount').textContent = '$' + betAmount;
}

function updateCards() {
	document.querySelector('#dealer-cards').textContent = dealer;
	document.querySelector('#player-cards').textContent = player;
}

function resetBet() {
	betAmount = 0;
	updateBetAmount();
}

function goNext() {
	evaluateWin();
	updateBalance();
	next.style.visibility = 'visible';
	resetBet();
	bet.style.visibility = 'hidden';
	hit.style.visibility = 'hidden';
	stand.style.visibility = 'hidden';
}

function evalChipContainer() {
	chip5.style.visibility = 'hidden';
	chip10.style.visibility = 'hidden';
	chip50.style.visibility = 'hidden';
	chip100.style.visibility = 'hidden';
	chip500.style.visibility = 'hidden';
	chip1000.style.visibility = 'hidden';
	if (balance >= 5) {
		chip5.style.visibility = 'visible';
	}
	if (balance >= 10) {
		chip10.style.visibility = 'visible';
	}
	if (balance >= 50) {
		chip50.style.visibility = 'visible';
	}
	if (balance >= 100) {
		chip100.style.visibility = 'visible';
	}
	if (balance >= 500) {
		chip500.style.visibility = 'visible';
	}
	if (balance >= 1000) {
		chip1000.style.visibility = 'visible';
	}
}



/**********************************************************************
 * EVENT LISTENERS 
 **********************************************************************/



var chip5 = document.getElementById('5');
var chip10 = document.getElementById('10');
var chip50 = document.getElementById('50');
var chip100 = document.getElementById('100');
var chip500 = document.getElementById('500');
var chip1000 = document.getElementById('1000');
var chip_container = document.getElementById('chip-container');

function hidechips() {
	chip_container.style.visibility = 'hidden';
	chip5.style.visibility = 'hidden';
	chip10.style.visibility = 'hidden';
	chip50.style.visibility = 'hidden';
	chip100.style.visibility = 'hidden';
	chip500.style.visibility = 'hidden';
	chip1000.style.visibility = 'hidden';
}

chip5.addEventListener('click', function () {
	if (balance >= 5) {
		balance -= 5;
		betAmount += 5;
		updateBalance();
		updateBetAmount();
	}
	else
		alert("Insufficient balance to bet " + 5);
	console.log("==chip5 was clicked");
	evalChipContainer();
});

chip10.addEventListener('click', function () {
	if (balance >= 10) {
		balance -= 10;
		betAmount += 10;
		updateBalance();
		updateBetAmount();
	}
	else
		alert("Insufficient balance to bet " + 10);
	console.log("==chip10 was clicked");
	evalChipContainer();
});

chip50.addEventListener('click', function () {
	if (balance >= 50) {
		balance -= 50;
		betAmount += 50;
		updateBalance();
		updateBetAmount();
	}
	else
		alert("Insufficient balance to bet " + 50);
	console.log("==chip50 was clicked");
	evalChipContainer();
});

chip100.addEventListener('click', function () {
	if (balance >= 100) {
		balance -= 100;
		betAmount += 100;
		updateBalance();
		updateBetAmount();
	}
	else
		alert("Insufficient balance to bet " + 100);
	console.log("==chip100 was clicked");
	evalChipContainer();
});

chip500.addEventListener('click', function () {
	if (balance >= 500) {
		balance -= 500;
		betAmount += 500;
		updateBalance();
		updateBetAmount();
	}
	else
		alert("Insufficient balance to bet " + 500);
	console.log("==chip500 was clicked");
	evalChipContainer();
});

chip1000.addEventListener('click', function () {
	if (balance >= 1000) {
		balance -= 1000;
		betAmount += 1000;
		updateBalance();
		updateBetAmount();
	}
	else
		alert("Insufficient balance to bet " + 1000);
	console.log("==chip1000 was clicked");
	evalChipContainer();
});



var bet = document.getElementById('bet-button');
var hit = document.getElementById('hit-button');
var stand = document.getElementById('stand-button');
var split = document.getElementById('split-button');
var start = document.getElementById('start-button');
var next = document.getElementById('next-hand-button');
var balance = parseInt(document.querySelector('#balance').textContent.slice(1));
var betAmount = 0;

bet.addEventListener('click', function () {
	console.log("==bet was clicked");
	if (betAmount == 0) {
		alert("Bet amount cannot be $0");
	} else {
		bet.disabled = true;
		hit.style.visibility = 'visible';
		stand.style.visibility = 'visible';
		hidechips();
		dealCards();
		updateCards();
		if (count(player) == 21) {
			goNext();
		}
	}
});

hit.addEventListener('click', function () {
	dealHand(player);
	updateCards();
	console.log("==hit was clicked");
	if (count(player) > 21) {
		goNext();
	}
});

stand.addEventListener('click', function () {
	console.log("==stand was clicked");
	hit.style.visibility = 'hidden';
	stand.style.visibility = 'hidden';

	dealerBot();
	goNext();
});

split.addEventListener('click', function () {
	console.log("==split was clicked");
});

next.addEventListener('click', function () {
	console.log("==next was clicked");
	clearHands();
	updateCards();
	evalChipContainer();
	chip_container.style.visibility = 'visible';
	next.style.visibility = 'hidden';
	bet.style.visibility = 'visible';
	bet.disabled = false;
});

start.addEventListener('click', function () {
	console.log("==start was clicked");
	// if (chip_container.style.visibility == 'hidden'){
	chip_container.style.visibility = 'visible';
	start.style.visibility = 'hidden';
	bet.style.visibility = 'visible';
	generateDecks(6);
	// }
});

// logo to mainpage
var logo = document.getElementById('logo');
logo.addEventListener('click', () => {
	window.location = '../webdev/frontPage.html';
});


//background music
var musicSlider = document.getElementById('music-slider');
var musicAudio = document.getElementById('music');
musicSlider.addEventListener('mousedown', (event) => {
	if (event.button == 0) {
		musicSlider.addEventListener("mousemove", () => {
			musicAudio.volume = parseFloat(musicSlider.value) / 100;
			event.preventDefault();
		});
	}
});

//overwiting functions of main page
var previousMusic = .50;
var previousSFX = .50;

function toCloseModal() //function used to close the modal
{
	const openBlackdrop = document.querySelector(".backdrop");
	const openModal = document.querySelector(".about-us");


	openBlackdrop.classList.toggle("hidden")
	openModal.classList.toggle("hidden")

}

function openSettings() {
	const openSettings = document.querySelector(".settings-box");
	openSettings.classList.toggle("hidden");
}

function closeSettings() {
	const closeSettings = document.querySelector(".settings-box");
	musicSlider.value = previousMusic * 100;
	musicAudio.volume = previousMusic;
	closeSettings.classList.toggle("hidden");
}

function saveSettings() {
	const saveSettings = document.querySelector(".settings-box");
	previousMusic = musicSlider.value / 100;
	document.getElementById("SFX-slider").value = previousSFX * 100;//not implemented yet since we dont have an array of SFX yet

	console.log(" === musicValue saveSettings:" + previousMusic);
	console.log(" === musicValue saveSettings:" + previousSFX);
	saveSettings.classList.toggle("hidden");
}

//open modal
let aboutUsOpenModal = document.querySelector("#nav-button-about");
aboutUsOpenModal.addEventListener("click", toCloseModal);

//close modal by X
let closeModalByIcon = document.getElementById("X");
closeModalByIcon.addEventListener("click", toCloseModal);

//close modal by button(close)
let closeModalByButton = document.getElementById("close");
closeModalByButton.addEventListener("click", toCloseModal);

let settingsOpenModal = document.querySelector("#nav-button-settings");
settingsOpenModal.addEventListener("click", openSettings);

let settingsCloseModal = document.querySelector("#closeSettings");
settingsCloseModal.addEventListener("click", closeSettings);

let settingsSaveModal = document.querySelector("#saveSettings");
settingsSaveModal.addEventListener("click", saveSettings);
