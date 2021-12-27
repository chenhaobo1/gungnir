import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import "./App.css";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div>
        <Menu defaultIndex={0} mode="vertical">
          <MenuItem index={0}>
          one
          </MenuItem>
          <MenuItem index={1} disabled>
          two
          </MenuItem>
          <MenuItem index={2}>
          three
          </MenuItem>
        </Menu>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <code>const a = "b"</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <div>
          <Button onClick={(e) => {e.preventDefault(); alert(1231)}} size={ButtonSize.Small}>hello</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
            hello
          </Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
            hello
          </Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Small}>
            hellaaaaaaaaaaaaaaaao
          </Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
            hello
          </Button>
          <Button btnType={ButtonType.Link} href="http://www.baidu.com">
            Baidu Link
          </Button>
          <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
            Baidu Link
          </Button>
        </div>
    </div>
  );
}

export default App;
