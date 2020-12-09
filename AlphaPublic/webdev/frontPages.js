// <!-- ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ -->
// <!-- The following code is develop by Ryan  -->
// <!-- The following code is merged by Lyon  -->
// <!-- The following code is for the about us modal pop up and close -->
var previousMusic = .50;
var previousSFX = .50;

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

function buttonclickMusic(){
  //unset
}

function toCloseModal() //function used to close the modal
{
	buttonclickMusic();
  const openBlackdrop = document.querySelector(".backdrop");
  const openModal = document.querySelector(".about-us");


  openBlackdrop.classList.toggle("hidden")
  openModal.classList.toggle("hidden")

}

function openSettings() {
	buttonclickMusic();
  const openBackdropSettings = document.querySelector(".backdropSettings");
  const openSettings = document.querySelector(".settings-box");

  openSettings.classList.toggle("hidden");
  openBackdropSettings.classList.toggle("hidden");
}

function closeSettings() {
	buttonclickMusic();
  const closeSettings = document.querySelector(".settings-box");
  const openBackdropSettings = document.querySelector(".backdropSettings");
  musicSlider.value = previousMusic * 100;
	musicAudio.volume = previousMusic;
	SFXSlider.value = previousSFX * 100;
	SFXVolume = previousSFX;
  closeSettings.classList.toggle("hidden");
  openBackdropSettings.classList.toggle("hidden");
}

function saveSettings() {
	buttonclickMusic();
  const saveSettings = document.querySelector(".settings-box");
  const openBackdropSettings = document.querySelector(".backdropSettings");
	previousMusic = musicSlider.value / 100;
	previousSFX = SFXSlider.value / 100;

	console.log(" === musicValue saveSettings:" + previousMusic);
	console.log(" === musicValue saveSettings:" + previousSFX);
  saveSettings.classList.toggle("hidden");
  openBackdropSettings.classList.toggle("hidden");
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



// <!-- The above code is develop by Ryan  -->
// <!-- The above code is for the about us modal pop up and close -->
// <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
