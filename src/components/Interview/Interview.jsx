import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import SpeechRecognition from './SpeechRecognition/SpeechRecognition';
import questions from "./Questions";
import "./Interview.css";

function Interview() {
    const [active, setActive] = useState(questions[0].question);
    const [category, setCategory] = useState(questions[0].category);
  return (
    <SpeechRecognition />
  );
}

export default Interview;