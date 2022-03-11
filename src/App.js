import React, { Component, useReducer } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
    state = {
        names: ["Stan", "Winston", "Wilifred", "Liza", "Pearl", "Chloe"]

    };
    removeName = (clickedIndex) => {
        const filterCallBack = (_, index) => index !== clickedIndex;
        const newNames = this.state.names.filter(filterCallBack);
        this.setState({ names: newNames });
    };
    addName = (name) => {
        const newNames = [name, ...this.state.names];
        this.setState({ names: newNames });

    };

    render() {
        return (
            <div classMame="App">
                <h1>Name Tag Generator</h1>
                <UserInput addName={this.addName} />
                <NameTagList names={this.state.names} removeName={this.removeName} />
            </div>
        );
    }
}

export default App;