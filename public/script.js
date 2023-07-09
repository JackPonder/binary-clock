const bits = document.getElementsByClassName("bit");
const decimalLabels = document.getElementsByClassName("time-label-big");
const binaryLabels = document.getElementsByClassName("time-label-small");

setInterval(() => {
  const time = new Date().toLocaleTimeString([], { 
    hourCycle: "h23"
  }).replace(/:/g, "").split("").map(i => parseInt(i));

  for (let i = 0; i < time.length; i++) {
    decimalLabels[i].innerHTML = time[i].toString();
    binaryLabels[i].innerHTML = time[i].toString(2).padStart(4, "0");
  }

  const binaryTime = time.map(i => i.toString(2).padStart(4, "0")).join("");
  for (let i = 0; i < binaryTime.length; i++) {
    const label = (
      (i - 3) % 4 === 0 ? 1 : 
      (i - 2) % 4 === 0 ? 2 :
      (i - 1) % 4 === 0 ? 4 : 8        
    );
    
    if (binaryTime[i] === "1") {
      bits[i].classList.add("active");
      bits[i].innerHTML = label.toString();
    } else if (binaryTime[i] === "0") {
      bits[i].classList.remove("active");
      bits[i].innerHTML = "";
    }
  }
}, 1000);