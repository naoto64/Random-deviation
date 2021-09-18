function average(x) {
    let n = x.length;
    let avg = 0;

    for(i=0; i<n; i++) {
        avg += x[i];
    }
    return avg / n; //  (1 / n * avg)
}
let min = 1;
function standardDeviation(x, avg) {
    let n = x.length;
    let sum = 0;
    for (i=0; i<n; i++) {
        sum+=Math.pow(x[i] - avg, 2);
    }
    return Math.sqrt(sum / n);
}

function loop() {
  let x = [];
  for (var i = 0; i < 64; i++) {
    x[i] = Math.random();
  }
  let avg = average(x);
  let sd = standardDeviation(x, avg);
  if(sd < min){
    min = sd;
  }

  document.body.textContent = "Random deviation: " + min;
}

function main() {
    window.setInterval(loop, 1);
}

window.addEventListener("load", main, false);
