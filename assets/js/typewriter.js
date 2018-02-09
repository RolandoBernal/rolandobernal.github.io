// set up text to print, each item in array is new line
var aText = new Array(
"UI & UX Digital Product Designer, and Web Developer based in Music City USA "
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + " <span></span>";
    //<span style='color:red'>4</span>
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 300);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

//var i = 0;
//var txt = 'UI & UX Digital Product Designer, and Web Developer based in Music City USA';
//var speed = 100;
//var x = document.getElementById("typedtext");
//
//function typeWriter() {
//  if (i < txt.length) {
//    document.getElementById("typedtext").innerHTML += txt.charAt(i);
//    i++;
//    setTimeout(typeWriter, speed);
//  }
//}


function myFunction() {
    setTimeout(function(){ typewriter(); }, 3500);
}

myFunction();