$(function(){
  var numberOfLis1 = $('#count1').find('li').length;
  $("#lis1").text(numberOfLis1);
  var numberOfLis2 = $('#count2').find('li').length;
  $("#lis2").text(numberOfLis2);
  
  var numberOfAs1 = $('#count1').find('a').length;
  $("#as1").text(numberOfAs1);
  var numberOfAs2 = $('#count2').find('a').length;
  $("#as2").text(numberOfAs2);
});