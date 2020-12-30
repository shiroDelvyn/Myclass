function box() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("hidden").style.opacity = "1";
};

var d = new Date();
var h = d.getHours();

function greet(time) {
    var array1 = ["https://media.giphy.com/media/3oKIPqjfyrXlGHwvdK/giphy.gif", "https://media.giphy.com/media/1xV8adm6Zaht5oAfwd/giphy.gif", "https://media.giphy.com/media/SIb2l6sHfGKNG/giphy.gif", "https://media.giphy.com/media/cAuwW15e54lFGXoMyc/giphy.gif"];
    var array2 = ["Pagi", "Siang", "Sore", "Malam"];
    let i = time - 1;
    document.getElementById('imggreet').src = array1[i];
    document.getElementById('greetText').innerHTML = "Selamat " + array2[i];
}

window.onload=function() {
    if (h >= 6 && h < 10) {
        greet(1);
        function myFunction1(x) {
            if (x.matches) { // If media query matches
                document.body.style.backgroundImage = "url('../image/hpWallpaperM.jpg')";
            } else {
                document.body.style.backgroundImage = "url('../image/pcWallpaperM.jpg')"
            }
          }
          
          var x = window.matchMedia("(max-width: 1080px)")
          myFunction1(x) // Call listener function at run time
          x.addListener(myFunction1) // Attach listener function on state changes
    } else if (h >= 10 && h < 14) {
        greet(2);
        function myFunction2(x) {
            if (x.matches) { // If media query matches
                document.body.style.backgroundImage = "url('../image/hpWallpaperA.jpg')";
            } else {
                document.body.style.backgroundImage = "url('../image/pcWallpaperA.jpg')"
            }
          }
          
          var x = window.matchMedia("(max-width: 1080px)")
          myFunction2(x) // Call listener function at run time
          x.addListener(myFunction2) // Attach listener function on state changes
    } else if (h >= 14 && h < 18) {
        greet(3);
        function myFunction3(x) {
            if (x.matches) { // If media query matches
                document.body.style.backgroundImage = "url('../image/hpWallpaperE.jpg')";
            } else {
                document.body.style.backgroundImage = "url('../image/pcWallpaperE.jpg')"
            }
          }
          
          var x = window.matchMedia("(max-width: 1080px)")
          myFunction3(x) // Call listener function at run time
          x.addListener(myFunction3) // Attach listener function on state changes
    } else {
        greet(4);
        function myFunction4(x) {
            if (x.matches) { // If media query matches
                document.body.style.backgroundImage = "url('../image/hpWallpaperN.jpg')";
            } else {
                document.body.style.backgroundImage = "url('../image/pcWallpaperN.jpg ')"
            }
          }
          
          var x = window.matchMedia("(max-width: 1080px)")
          myFunction4(x) // Call listener function at run time
          x.addListener(myFunction4) // Attach listener function on state changes
    }
}