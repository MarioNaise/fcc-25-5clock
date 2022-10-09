export default function BreakControl(props) {
  return (<div>
    <label id="break-label">Break Length</label>
    <button onClick={props.decreaseBreakTime}>
      less
    </button>
    <p>{props.breakTime}</p>
    <button onClick={props.increaseBreakTime}>
      more
    </button>
  </div>
  );
}