const myImage = document.getElementById("my-image");
const myButton = document.getElementById("my-button");
const myText = document.getElementById("my-text");
const contentDiv = document.getElementById('my-div');



myButton.addEventListener("click", () => {
    myImage.src = "../images/11.gif";
  if (myText.style.display === "none") {
    myText.style.display = "block";
  } else {
    myText.style.display = "none";
    contentDiv.classList.toggle('alt');

  }
});