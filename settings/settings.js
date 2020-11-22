var music = document.getElementById("music-button");
var musicSlider = document.getElementById('music-slider');
music.addEventListener('click', ()=>{
	if(music.checked){
		musicSlider.value = 0;
	}
	else{
		musicSlider.value = 50;
	}
});
musicSlider.addEventListener('click', ()=>{
	if(musicSlider.value == 0)
		music.checked = true;
	else
		music.checked = false;
});

var SFX = document.getElementById("SFX-button");
var SFXslider = document.getElementById('SFX-slider');
SFX.addEventListener('click', ()=>{
	if(SFX.checked){
		SFXslider.value = 0;
	}
	else{
		SFXslider.value = 50;
	}
});
SFXslider.addEventListener('click', ()=>{
	if(SFXslider.value == 0)
		SFX.checked = true;
	else
		SFX.checked = false;
});

var theme = document.getElementById('theme');
theme.addEventListener('click', ()=>{
	if(theme.value === "light"){
		theme.classList = "light";
	}
	else{
		theme.classList = "dark";
	}
});

