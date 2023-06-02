export default function SessionControl(props) {
  return (
    <div className="container flex">
      <label id="session-label">Session Length</label>
      <div className="flex-row">
        <button id="session-decrement" onClick={props.decreaseSessionTime}>
          -
        </button>
        <p id="session-length">{props.sessionTimeDisplay}</p>
        <button id="session-increment" onClick={props.increaseSessionTime}>
          +
        </button>
      </div>
    </div>
  );
}
