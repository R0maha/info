// // console.log( 'Bla Bla' );
// // console.log( typeof header );
// // console.log( Boolean ());
// // console.dir( );


var hourse = document.getElementsByClassName('hourse');
var minutes = document.getElementsByClassName('minutes');
var seconds = document.getElementsByClassName('seconds');
var hourseCound = 0;
var minutesCound = 0;
var secondCound = 0;

setInterval(function() {
  secondCound++

  calibrate(seconds, secondCound);
  calibrate(minutes, minutesCound);
  calibrate(hourse, hourseCound);

  if (secondCound > 20) {
    minutesCound++;
    secondCound = 0;
    calibrate(minutes, minutesCound);
  }

  if (minutesCound > 20) {
    hourseCound++;
    minutesCound = 0;
    calibrate(hourse, hourseCound);
  }

}, 500);


function calibrate(item, coundValue) {
  if(coundValue < 10){
    item[0].innerHTML = '0' + coundValue;
  }else{
    item[0].innerHTML = coundValue;
  }
}