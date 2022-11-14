export default function Session(props) {
  let secondsLeft = props.sessionTime % 60;
  let minutesLeft = Math.floor(props.sessionTime / 60)
  return (<div className="container flex">
    <label id="timer-label">{props.timerLabel}</label>
    <p id="time-left">{(minutesLeft<10 && `0${minutesLeft}`) || minutesLeft}:{(secondsLeft<10 && `0${secondsLeft}`) || secondsLeft}</p>
  </div>)
}