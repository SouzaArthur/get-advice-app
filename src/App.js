import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [adviceTimes, setAdviceTimes] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceTimes(adviceTimes + 1);
  }

  return (
    <div className="App">
      <h1>Advice App</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get Advice</button>
      <Message adviceTimes={adviceTimes} />
    </div>
  );
}

function Message(props) {
  return <p>You have been adviced {props.adviceTimes} time(s)</p>;
}
