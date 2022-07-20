import { useState, useEffect } from "react";

export default function App() {
  const [  ] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const time = { 
        hours: date.getHours().toString().padStart(2, "0"), 
        minutes: date.getMinutes().toString().padStart(2, "0"), 
        seconds: date.getSeconds().toString().padStart(2, "0"),
      };

      if (true) {}

      console.clear();
      console.log(time.seconds[0], time.seconds[1]);
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
