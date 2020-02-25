import React, { Component } from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import UserList from "./components/users-list/users-list.component";

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }
    render() {
        return (
            <div className="App">
                <Header />
                <UserList />
            </div>
        );
    }
}

export default App;
