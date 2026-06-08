// https://stackoverflow.com/a/31799877

var divs = ["Div1", "Div2", "Div3", "Div4"];
  var visibleDivId = null;
  function divVisibility(divId) {
    if(visibleDivId === divId) {
      visibleDivId = null;
    } else {
      visibleDivId = divId;
    }
    hideNonVisibleDivs();
  }
  function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);
      if(visibleDivId === divId) {
        div.style.display = "revert";
      } else {
        div.style.display = "none";
      }
    }
  }