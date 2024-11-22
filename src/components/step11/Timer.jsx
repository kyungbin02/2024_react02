import React, { useState, useRef } from "react";

function TimerWithRef() {
  const [time, setTime] = useState(0); // 화면에 표시할 타이머 값
  const timerRef = useRef(null); // 타이머 ID 저장
  const lastRecordedTime = useRef(0); // 마지막 측정된 시간을 저장

  // 타이머 시작
  const startTimer = () => {
    if (timerRef.current !== null) return; // 이미 실행 중이면 중단
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // 1초마다 증가
    }, 1000);
  };

  // 타이머 정지
  const stopTimer = () => {
    clearInterval(timerRef.current); // 타이머 중지
    timerRef.current = null; // ID 초기화
    lastRecordedTime.current = time; // 마지막 측정 시간을 저장
    console.log(`마지막 기록된 시간: ${lastRecordedTime.current}초`);
  };

  // 타이머 초기화
  const resetTimer = () => {
    stopTimer(); // 타이머 정지
    setTime(0); // 시간 초기화
    lastRecordedTime.current = 0; // 기록 초기화
  };

  return (
    <div>
      <h1>타이머: {time}초</h1>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>정지</button>
      <button onClick={resetTimer}>초기화</button>
      <p>마지막 기록된 시간: {lastRecordedTime.current}초</p>
    </div>
  );
}

export default TimerWithRef;
