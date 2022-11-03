import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: COS420 Evan Hamer...
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
                <span style={{ color: "red" }}>col</span>
            </p>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>
                    <img src="src/background.jpg" alt="test" />
                </li>
            </ul>
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
        </div>
    );
}

export default App;
