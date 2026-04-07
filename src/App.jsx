import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const adviceText = response.data.slip.advice;
      setAdvice(adviceText);
    } catch (error) {
      console.log("Failed to fetch advice: ", error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div>
      <p>{advice}</p>
      <button onClick={fetchAdvice} type='button'>Get a New Advice</button>
    </div>
  );
}