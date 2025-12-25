const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

function openPopup(img) {
  popupImg.src = img.src;
  popup.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
}
