var deck = [];
var dealer = [];
var player = [];


function clearHands(){
	dealer = [];
	player = [];
}

function addDeck(){
	suits = ['H', 'D', 'C', 'S'];
	for(let i = 1; i < 14; ++i){
		for(let s = 0; s < 4; ++s){
			deck.push(i + suits[s]);
		}
	}
}

function generateDecks(num){
	if(num){
		for(; num > 0; num--){
			addDeck();
		}
	}
	else
		addDeck();
}

function popCard(){
	return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
}

function dealHand(hand){
	hand.push(popCard());
}

function dealCards(){
	clearHands()
	if(deck.length < 53)
		generateDecks();
	for(let i = 0; i < 2; ++i){
		dealHand(player);
		dealHand(dealer);
	}
}

function init(){
	generateDecks(6);
	dealCards();
}

function count(hand){
	let sum = 0;
	if(hand.length == 2){
		if(parseInt(hand[0].slice(0, -1)) == 1 && parseInt(hand[1].slice(0, -1)) >= 10 || 
			parseInt(hand[0].slice(0, -1)) >= 10 && parseInt(hand[1].slice(0, -1)) == 1){
			return 21;
		}
		//A as 11 or 1 implement
	}
	for(let i = 0; i < hand.length; ++i){
		let n = parseInt(hand[i].slice(0, -1));
		if( n > 10){
			sum += 10;
		}
		else{
			sum += n;
		}
	}
	return sum;
}

function compHand(player, dealer){
	if(count(player) > 21){
		return 1;
	}
	if(count(dealer) > 21){
		return -1;
	}
	if(count(player) == count(dealer)){
		return 0;
	}
	if(count(player) > count(dealer)){
		return -1;
	}
	if(count(player) < count(dealer)){
		return 1;
	}
}

function dealerBot(){
	if(count(dealer) < 21){
		if(compHand(player, dealer) == -1){
			dealHand(dealer);
		}
	}
}

/*
 * init()					- adds 6 decks and deal cards()
 * dealCards()				- clear hands then deal cards to player and dealer
 * dealHand(hand)				- deal 1 card to selected hand
 * dealCards()				- returns total count of hand
 * generateDecks(n) 		- adds n decks onto deck, default n = 1
 * compHand(player, dealer)	- return -1, 0, 1 as player win, tie, dealer win respectively
 */











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


chip5.addEventListener('click', function(){
	console.log("==chip5 was clicked");
});

chip10.addEventListener('click', function(){
	console.log("==chip10 was clicked");
});

chip50.addEventListener('click', function(){
	console.log("==chip50 was clicked");
});

chip100.addEventListener('click', function(){
	console.log("==chip100 was clicked");
});

chip500.addEventListener('click', function(){
	console.log("==chip500 was clicked");
});

chip1000.addEventListener('click', function(){
	console.log("==chip1000 was clicked");
});



var bet = document.getElementById('bet-button');
var hit = document.getElementById('hit-button');
var stand = document.getElementById('stand-button');
var split = document.getElementById('split-button');
var start = document.getElementById('start-button');
var next = document.getElementById('next-hand-button')


bet.addEventListener('click', function(){
	console.log("==bet was clicked");
});

hit.addEventListener('click', function(){
	console.log("==hit was clicked");
});

stand.addEventListener('click', function(){
	console.log("==stand was clicked");
});

split.addEventListener('click', function(){
	console.log("==split was clicked");
});

next.addEventListener('click', function(){
	console.log("==next was clicked");
});

start.addEventListener('click', function(){
	console.log("==start was clicked");
	// if (chip_container.style.visibility == 'hidden'){
	chip_container.style.visibility = 'visible';
	start.style.visibility = 'hidden';
	bet.style.visibility = 'visible';
	init();
	// }
});
