// ReactDOM.render(<h1>Hello , React!</h1>, document.getElementById("root"));

// // ReactDOM.render(<p>This is new check</p>, document.getElementById("checking"));

// ReactDOM.render(<p>Hello World</p>, document.getElementById("checking"));

ReactDOM.render(<p>This is new Dom</p>, document.getElementById("details"));
ReactDOM.render(
  <ul>
    <li>HTML</li>
    <li>ReactJS</li>
    <li>NodeJS</li>
  </ul>,
  document.getElementById("checking_list")
);

function Check_component() {
  return (
    <div>
      <h1>ReactJS</h1>
      <p>This is new component</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Check_component />
  </div>,
  document.getElementById("Simple")
);
