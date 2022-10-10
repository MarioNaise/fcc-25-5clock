export default function SessionControl(props) {
  return (<div>
    <label id="session-label">Session Length</label>
    <button id="session-decrement" onClick={props.decreaseSessionTime}>
      less
    </button>
    <p id="session-length">{props.sessionTime}</p>
    <button id="session-increment" onClick={props.increaseSessionTime}>
      more
    </button>
  </div>
  );
}