export default function Controls(props) {
  return (<div>
    <button onClick={props.handleStartStop} id="start_stop">Start/Stop</button>
    <button id="reset">Reset</button>
  </div>
  );
}