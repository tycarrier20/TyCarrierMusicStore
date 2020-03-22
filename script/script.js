function openWin() {
  window.open("PurchaseInformation.html");
}


/*
  var button = document.getElementById("homeIcon");
  var purchase = document.getElementById("homeIcon");

  button.onmouseover= function() {
    purchase.className = "hovered";
  }

  button.onmouseout= function() {
    purchase.className = "";
  }


*/





var playCounter=0;

window.onload = function createAudioID() {
  var cls = document.getElementsByClassName('beats');
  for (i=0; length = cls.length, i<length; i++) {
    cls[i].id="beat_"+(i+1);
    cls[i].onClick="playBeat(i+1);";
  }
}

/*
function restartSong() {

    var player = document.getElementById('beat_')+i;


  if (player.pause()) {
    player.currentTime = 0;
  }
}



function countPlays() {
  playCounter++;

console.log(playCounter);

      for (i=0; i<1000; i++) {
        var player = document.getElementById('beat_')+i;
      }


      if (playCounter % 2 == 0) {
      player.pause();
      player.currentTime = 0
      } else {
      player.play();
      }

}

*/
