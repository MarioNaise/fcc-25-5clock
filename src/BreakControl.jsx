export default function BreakControl(props) {
  return (
    <div className="container flex">
      <label id="break-label">Break Length</label>
      <div className="flex-row">
        <button id="break-decrement" onClick={props.decreaseBreakTime}>
          -
        </button>
        <p id="break-length">{props.breakTimeDisplay}</p>
        <button id="break-increment" onClick={props.increaseBreakTime}>
          +
        </button>
      </div>
    </div>
  );
}
