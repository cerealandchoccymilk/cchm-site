// https://www.geeksforgeeks.org/javascript/how-to-toggle-an-element-class-in-javascript/#method-1-by-using-the-toggle-method

function lyricToggle() {
  let lyricWrapper = document.getElementById("lyric");
  lyricWrapper.classList.toggle("lyric-2col");
}