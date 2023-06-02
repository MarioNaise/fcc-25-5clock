export default function Controls(props) {
  return (
    <div className="flex container">
      <button onClick={props.handleStartStop} id="start_stop">
        {props.counting ? "Stop" : "Start"}
      </button>
      <button onClick={props.handleReset} id="reset">
        Reset
      </button>
    </div>
  );
}
