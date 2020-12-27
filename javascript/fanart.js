var d = new Date();
var h = d.getHours();

window.onload=function() {
    if (h >= 5 && h < 10 ) {
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