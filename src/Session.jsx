export default function Session(props) {
  let secondsLeft = props.sessionTime % 60;
  return (<div>
    <h3 id="timer-label">{props.timerLabel}</h3>
    <div id="time-left">{Math.floor(props.sessionTime / 60)}:{(secondsLeft<10 && `0${secondsLeft}`)||secondsLeft}</div>
  </div>)
}