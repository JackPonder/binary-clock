import { useState, useEffect } from "react";

export default function App() {
  const [  ] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const time = { 
        hours: date.getHours(), 
        minutes: date.getMinutes(), 
        seconds: date.getSeconds() 
      };

      console.clear();
      console.log(time);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        {/* Row 1 */}
        <div className="bar" id="1">8</div>
        <div className="bar" id="2">8</div>
        <div className="bar" id="3">8</div>
        <div className="bar" id="4">8</div>
        <div className="bar" id="5">8</div>
        <div className="bar" id="6">8</div>
        {/* Row 2 */}
        <div className="bar" id="7">4</div>
        <div className="bar" id="8">4</div>
        <div className="bar" id="9">4</div>
        <div className="bar" id="10">4</div>
        <div className="bar" id="11">4</div>
        <div className="bar" id="12">4</div>
        {/* Row 3 */}
        <div className="bar" id="13">2</div>
        <div className="bar" id="14">2</div>
        <div className="bar" id="15">2</div>
        <div className="bar" id="16">2</div>
        <div className="bar" id="17">2</div>
        <div className="bar" id="18">2</div>
        {/* Row 4 */}
        <div className="bar" id="19">1</div>
        <div className="bar" id="20">1</div>
        <div className="bar" id="21">1</div>
        <div className="bar" id="22">1</div>
        <div className="bar" id="23">1</div>
        <div className="bar" id="24">1</div>
      </div>
    </div>
  );
}
