export default function BreakControl(props) {
  return (<div>
    <button>
      less
    </button>
    <p>{props.breakTime}</p>
    <button>
      more
    </button>
  </div>
  );
}