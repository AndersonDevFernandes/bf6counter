"use client";

import { useEffect, useState } from "react";
import "./Countdown.css"; // importa o CSS

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Data final: 10 de outubro de 2025 às 15:00
    const targetDate = new Date("2025-10-10T15:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">      
      <h1 className="countdown-title">CONTAGEM REGRESSIVA PARA LANÇAMENTO.</h1>
      <div className="countdown-timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <small>Dias</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <small>Horas</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <small>Minutos</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <small>Segundos</small>
        </div>
      </div>
    </div>
  );
}
