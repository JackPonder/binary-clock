import { useState, useEffect } from "react";

export default function App() {
  const [  ] = useState();

  useEffect(() => {
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

      time.forEach((item, index) => { 
        time[index] = item.toString(2).padStart(4, "0");
      });

      for (const element of document.getElementsByClassName("bar")) { 
        element.className = "bar";
      }

      console.clear();
      console.log(time);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container-major">
        <div className="container-minor">
          <div className="container-header">Hours</div>
          {/* Row 1 */}
          <div className="bar" id="h4"></div>
          <div className="bar" id="h8"></div>
          {/* Row 2 */}
          <div className="bar" id="h3"></div>
          <div className="bar" id="h7"></div>
          {/* Row 3 */}
          <div className="bar" id="h2"></div>
          <div className="bar" id="h6"></div>
          {/* Row 4 */}
          <div className="bar" id="h1"></div>
          <div className="bar" id="h5"></div>
        </div>
        <div className="container-minor">
          <div className="container-header">Minutes</div>
          {/* Row 1 */}
          <div className="bar" id="m4"></div>
          <div className="bar" id="m8"></div>
          {/* Row 2 */}
          <div className="bar" id="m3"></div>
          <div className="bar" id="m7"></div>
          {/* Row 3 */}
          <div className="bar" id="m2"></div>
          <div className="bar" id="m6"></div>
          {/* Row 4 */}
          <div className="bar" id="m1"></div>
          <div className="bar" id="m5"></div>
        </div>
        <div className="container-minor">
          <div className="container-header">Seconds</div>
          {/* Row 1 */}
          <div className="bar" id="s4"></div>
          <div className="bar" id="s8"></div>
          {/* Row 2 */}
          <div className="bar" id="s3"></div>
          <div className="bar" id="s7"></div>
          {/* Row 3 */}
          <div className="bar" id="s2"></div>
          <div className="bar" id="s6"></div>
          {/* Row 4 */}
          <div className="bar" id="s1"></div>
          <div className="bar" id="s5"></div>
        </div>
      </div>
    </div>
  );
}
