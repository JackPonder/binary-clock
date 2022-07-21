import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let time = [
        Math.floor(date.getHours() / 10 % 10),
        Math.floor(date.getHours() % 10),
        Math.floor(date.getMinutes() / 10 % 10),
        Math.floor(date.getMinutes() % 10),
        Math.floor(date.getSeconds() / 10 % 10),
        Math.floor(date.getSeconds() % 10),
      ];
      time.forEach((item, index) => { 
        time[index] = item.toString(2).padStart(4, "0");
      });
      time = time.join("");

      for (let i = 0; i < time.length; i++) {
        const label = 
          (i - 3) % 4 === 0 ? 1 : 
          (i - 2) % 4 === 0 ? 2 :
          (i - 1) % 4 === 0 ? 4 : 8;
        const bar = document.getElementById(i);
        
        if (time[i] === "1") {
          bar.className = "bar active";
          bar.innerHTML = label;
        } else if (time[i] === "0") {
          bar.className = "bar";
          bar.innerHTML = "";
        }
      }
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container-major">
        <div className="container-minor">
          <div className="container-header">Hours</div>
          {/* Row 1 */}
          <div className="bar" id="0"></div>
          <div className="bar" id="4"></div>
          {/* Row 2 */}
          <div className="bar" id="1"></div>
          <div className="bar" id="5"></div>
          {/* Row 3 */}
          <div className="bar" id="2"></div>
          <div className="bar" id="6"></div>
          {/* Row 4 */}
          <div className="bar" id="3"></div>
          <div className="bar" id="7"></div>
        </div>
        <div className="container-minor">
          <div className="container-header">Minutes</div>
          {/* Row 1 */}
          <div className="bar" id="8"></div>
          <div className="bar" id="12"></div>
          {/* Row 2 */}
          <div className="bar" id="9"></div>
          <div className="bar" id="13"></div>
          {/* Row 3 */}
          <div className="bar" id="10"></div>
          <div className="bar" id="14"></div>
          {/* Row 4 */}
          <div className="bar" id="11"></div>
          <div className="bar" id="15"></div>
        </div>
        <div className="container-minor">
          <div className="container-header">Seconds</div>
          {/* Row 1 */}
          <div className="bar" id="16"></div>
          <div className="bar" id="20"></div>
          {/* Row 2 */}
          <div className="bar" id="17"></div>
          <div className="bar" id="21"></div>
          {/* Row 3 */}
          <div className="bar" id="18"></div>
          <div className="bar" id="22"></div>
          {/* Row 4 */}
          <div className="bar" id="19"></div>
          <div className="bar" id="23"></div>
        </div>
      </div>
    </div>
  );
}
