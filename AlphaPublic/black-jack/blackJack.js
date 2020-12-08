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
	dealcardsMusic();
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
		dealcardsMusic();
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
			loseMusic();
			customAlert("Dealer won $" + betAmount);
			break;
		case -1:
			balance += betAmount * 2;
			customAlert("You've won $" + betAmount);
			break;
		default:
			balance += betAmount
			customAlert("Tied Hands!");
	}
}

function generateDummy() {
	let dummydeck = document.querySelector('#dummy-deck');
	for (var a =0; a <52; a++){
		dummydeck.appendChild(generateCard('backcard'));

		document.getElementById('dummy-deck').childNodes[a].setAttribute('style', 'left:' + (-0.19*a) + 'px;' + 'bottom:' + (0.15*a) + 'px;' + 'position: absolute;');
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
	let dealerDiv = document.querySelector('#dealer-cards');
	while(dealerDiv.childElementCount){
		dealerDiv.removeChild(dealerDiv.firstChild);
	}
	dealer.forEach((element)=>{
		dealerDiv.appendChild(generateCard(element));
	});
	if(dealer[1])
		dealerDiv.replaceChild(generateCard('backcard'), dealerDiv.children[1]);

	let playerDiv = document.querySelector('#player-cards');
	while(playerDiv.childElementCount){
		playerDiv.removeChild(playerDiv.firstChild);
	}
	player.forEach((element)=>{
		playerDiv.appendChild(generateCard(element));
	});
}

function resetBet() {
	betAmount = 0;
	updateBetAmount();
}

function goNext() {
	let dealerDiv = document.querySelector('#dealer-cards');
	dealerDiv.replaceChild(generateCard(dealer[1]), dealerDiv.childNodes[1]);
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

function customAlert(message) {
	const openBlackdrop = document.querySelector(".backdrop");
	const alertBox = document.querySelector("#alert");
	document.querySelector("#alert p").textContent = message;
	alertBox.classList.toggle("hidden");
	openBlackdrop.classList.toggle("hidden");
}

function generateCard(cardVal){
	var cardDiv = document.createElement('div');
	cardDiv.classList = 'card';
	var cardImg = document.createElement('img');
	cardImg.src = "/black-jack/cards/" + cardVal + ".png";
	cardImg.alt = cardVal;
	cardDiv.appendChild(cardImg);
	return cardDiv;
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
		pokerchipsMusic()
		balance -= 5;
		betAmount += 5;
		updateBalance();
		updateBetAmount();
	}
	else
		customAlert("Insufficient balance to bet " + 5);
	console.log("==chip5 was clicked");
	evalChipContainer();
});

chip10.addEventListener('click', function () {
	if (balance >= 10) {
		pokerchipsMusic()
		balance -= 10;
		betAmount += 10;
		updateBalance();
		updateBetAmount();
	}
	else
		customAlert("Insufficient balance to bet " + 10);
	console.log("==chip10 was clicked");
	evalChipContainer();
});

chip50.addEventListener('click', function () {
	if (balance >= 50) {
		pokerchipsMusic()
		balance -= 50;
		betAmount += 50;
		updateBalance();
		updateBetAmount();
	}
	else
		customAlert("Insufficient balance to bet " + 50);
	console.log("==chip50 was clicked");
	evalChipContainer();
});

chip100.addEventListener('click', function () {
	if (balance >= 100) {
		pokerchipsMusic()
		balance -= 100;
		betAmount += 100;
		updateBalance();
		updateBetAmount();
	}
	else
		customAlert("Insufficient balance to bet " + 100);
	console.log("==chip100 was clicked");
	evalChipContainer();
});

chip500.addEventListener('click', function () {
	if (balance >= 500) {
		pokerchipsMusic()
		balance -= 500;
		betAmount += 500;
		updateBalance();
		updateBetAmount();
	}
	else
		customAlert("Insufficient balance to bet " + 500);
	console.log("==chip500 was clicked");
	evalChipContainer();
});

chip1000.addEventListener('click', function () {
	if (balance >= 1000) {
		pokerchipsMusic()
		balance -= 1000;
		betAmount += 1000;
		updateBalance();
		updateBetAmount();
	}
	else
		customAlert("Insufficient balance to bet " + 1000);
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
var allIn = document.getElementById('all-in-button');

allIn.addEventListener('click', function () {
	buttonclickMusic();
	console.log('==All In clicked');
	betAmount += balance ;
	balance = 0 ;
	allIn.style.visibility = 'hidden';
	updateBalance();
	updateBetAmount();
	evalChipContainer();
});

bet.addEventListener('click', function () {
	buttonclickMusic();
	console.log("==bet was clicked");
	if (betAmount == 0) {
		customAlert("Bet amount cannot be $0");
	} else {
		allIn.style.visibility = 'hidden'
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
	buttonclickMusic();
	dealHand(player);
	updateCards();
	console.log("==hit was clicked");
	if (count(player) >= 21) {
		dealerBot();
		goNext();
	}
});

stand.addEventListener('click', function () {
	buttonclickMusic();
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
	buttonclickMusic();
	console.log("==next was clicked");
	clearHands();
	updateCards();
	evalChipContainer();
	chip_container.style.visibility = 'visible';
	next.style.visibility = 'hidden';
	bet.style.visibility = 'visible';
	allIn.style.visibility = 'visible';
	bet.disabled = false;

	if (balance == 0){
		customAlert("You ran out of money! Here is $5000 more, on the house");
		balance += 5000;
		updateBalance();
		evalChipContainer();
	}
});

start.addEventListener('click', function () {
	buttonclickMusic();
	console.log("==start was clicked");
	// if (chip_container.style.visibility == 'hidden'){
	chip_container.style.visibility = 'visible';
	start.style.visibility = 'hidden';
	bet.style.visibility = 'visible';
	allIn.style.visibility = 'visible';
	generateDecks(6);

	generateDummy();
});

function closeAlert() //function used to close the modal
{
	buttonclickMusic();
	const openBlackdrop = document.querySelector(".backdrop");
	const alertContainer = document.querySelector("#alert");

	openBlackdrop.classList.toggle("hidden");
	alertContainer.classList.toggle("hidden");
}

let closeAlertByIcon = document.getElementById("alertX");
closeAlertByIcon.addEventListener("click", closeAlert);

// logo to mainpage
var logo = document.getElementById('logo');
logo.addEventListener('click', () => {
	window.location = '/';
});


//All sounds Effects
function buttonclickMusic(){
	document.getElementById('buttonclickMusic').volume = SFXVolume;
	document.getElementById('buttonclickMusic').currentTime=0;
	document.getElementById('buttonclickMusic').play();
}

function dealcardsMusic(){
	document.getElementById('dealcardsMusic').volume = SFXVolume;
	document.getElementById('dealcardsMusic').currentTime=0;
	document.getElementById('dealcardsMusic').play();
}

function loseMusic(){
	document.getElementById('loseMusic').volume = SFXVolume;
	document.getElementById('loseMusic').currentTime=0;
	document.getElementById('loseMusic').play();
}

function pokerchipsMusic(){
	document.getElementById('pokerchipsMusic').volume = SFXVolume;
	document.getElementById('pokerchipsMusic').currentTime=0;
	document.getElementById('pokerchipsMusic').play();
}

//background music
var musicSlider = document.getElementById('music-slider');
var musicAudio = document.getElementById('elevatorMusic');
musicSlider.addEventListener('mousedown', (event) => {
	buttonclickMusic();
	if (event.button == 0) {
		musicSlider.addEventListener("mousemove", () => {
			musicAudio.volume = parseFloat(musicSlider.value) / 100;
			event.preventDefault();
		});
	}
});

//SFX
var SFXSlider = document.getElementById('SFX-slider');
var SFXVolume = 0.5;
SFXSlider.addEventListener('click', (event) => {
	SFXVolume = parseFloat(SFXSlider.value) / 100;
	event.preventDefault();
	buttonclickMusic();
});

//overwiting functions of main page
var previousMusic = .50;
var previousSFX = .50;

function toCloseModal() //function used to close the modal
{
	buttonclickMusic();
	const openBlackdrop = document.querySelector(".backdrop");
	const openModal = document.querySelector(".about-us");

	openBlackdrop.classList.toggle("hidden");
	openModal.classList.toggle("hidden");
}

function openSettings() {
	buttonclickMusic();
	const openSettings = document.querySelector(".settings-box");
	openSettings.classList.toggle("hidden");
}

function closeSettings() {
	buttonclickMusic();
	const closeSettings = document.querySelector(".settings-box");
	musicSlider.value = previousMusic * 100;
	musicAudio.volume = previousMusic;
	SFXSlider.value = previousSFX * 100;
	SFXVolume = previousSFX;
	closeSettings.classList.toggle("hidden");
}

function saveSettings() {
	buttonclickMusic();
	const saveSettings = document.querySelector(".settings-box");
	previousMusic = musicSlider.value / 100;
	previousSFX = SFXSlider.value / 100;

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


// /**********************************************************************
//  * Card Animations
//  **********************************************************************/
// function dealAnimation() {
// 	for (var i = 0; i < document.getElementById('player-cards').childNodes.length; i++){
// 		var card = document.getElementById('player-cards').childNodes[i];
// 		console.log(card);
// 		var pos = -300;
// 		var id = setInterval(frame, 5);
// 		function frame(){
// 			if(pos ==0){
// 				clearInterval(id);
// 			} else {
// 				card.style.left = pos + "px";
// 				// card.style.bottom = pos + "px";
// 			}
// 		}
// 	}
// }
