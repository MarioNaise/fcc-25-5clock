export default function BreakControl(props) {
  return (<div>
    <label id="break-label">Break Length</label>
    <button id="break-decrement" onClick={props.decreaseBreakTime}>
      less
    </button>
    <p id="break-length">{props.breakTimeDisplay}</p>
    <button id="break-increment" onClick={props.increaseBreakTime}>
      more
    </button>
  </div>
  );
}