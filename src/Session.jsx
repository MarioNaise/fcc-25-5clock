export default function Session(props) {
  return (<div>
    <h3 id="timer-label">Session</h3>
    <div id="time-left">{props.sessionTime}:{props.sessionSeconds}</div>
  </div>)
}