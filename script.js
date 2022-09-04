setInterval(() => {
  const date = new Date();
  const time = [
    Math.floor(date.getHours() / 10 % 10),
    Math.floor(date.getHours() % 10),
    Math.floor(date.getMinutes() / 10 % 10),
    Math.floor(date.getMinutes() % 10),
    Math.floor(date.getSeconds() / 10 % 10),
    Math.floor(date.getSeconds() % 10),
  ];

  for (let i = 0; i < time.length; i++) {
    const [ label1, label2 ] = document.getElementById("label" + i).children;
    label1.innerHTML = time[i];
    label2.innerHTML = time[i].toString(2).padStart(4, "0");
  }

  const binaryTime = time.map((item) => item.toString(2).padStart(4, "0")).join("");
  for (let i = 0; i < binaryTime.length; i++) {
    const bar = document.getElementById(i);
    const label = (
      (i - 3) % 4 === 0 ? 1 : 
      (i - 2) % 4 === 0 ? 2 :
      (i - 1) % 4 === 0 ? 4 : 8        
    );
    
    if (binaryTime[i] === "1") {
      bar.className = "bar active";
      bar.innerHTML = label;
    } else if (binaryTime[i] === "0") {
      bar.className = "bar";
      bar.innerHTML = "";
    }
  }
}, 1000);