export default function Controls(props) {
  return (<div className="flex">
    <button onClick={props.handleStartStop} id="start_stop">Start/Stop</button>
    <button onClick={props.handleReset} id="reset">Reset</button>
  </div>
  );
}