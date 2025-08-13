// const btn = document.querySelector(".change-color");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

document.getElementById("startBtn").addEventListener("click", startChangingColors);
document.getElementById("stopBtn").addEventListener("click", stopChangingColors);


 function randomIndex(max) {
      return Math.floor(Math.random() * max);
    }

    const colors = [
      "red", "blue", "green", "yellow", "purple",
      "orange", "pink", "cyan", "lime", "magenta"
    ];

    let intervalId;

    function startChangingColors() {
      
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        const rndCol = colors[randomIndex(colors.length)];
        document.body.style.backgroundColor = rndCol;
      }, 1000);
    }

    function stopChangingColors() {
      clearInterval(intervalId);
    }


