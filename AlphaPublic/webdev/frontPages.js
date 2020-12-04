// <!-- ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ -->
// <!-- The following code is develop by Ryan  -->
// <!-- The following code is for the about us modal pop up and close -->

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
  closeSettings.classList.toggle("hidden");
}

function saveSettings() {
  const saveSettings = document.querySelector(".settings-box");
  var musicValue = document.getElementById("music-slider").value;
  var sfxValue = document.getElementById("SFX-slider").value;

  console.log(" === musicValue saveSettings:" + musicValue);
  console.log(" === musicValue saveSettings:" + sfxValue);
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



// <!-- The above code is develop by Ryan  -->
// <!-- The above code is for the about us modal pop up and close -->
// <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
