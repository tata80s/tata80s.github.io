var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute ('src');
    if (mySrc === 'IMG_6971.JPG'){
        myImage.setAttribute ('src','images/seascape1SMALL.JPG');
    } else {
        myImage.setAttribute ('src','images/IMG_6971.jpg');
    }
    }
    document.querySelector('html').onclick = function() {
        alert('kukusiki');
    }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Как тебя зовут?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Яркие Картины, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Яркие картины, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
/*
Всё, что находится тут - комментарий.
*/
// just a comment
