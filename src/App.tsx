import React from 'react';
import {Component} from "react";
import './App.css';
import Clock from "./components/Clock";
import UsersF from "./functionalComponents/Users";
import 'antd/dist/antd.css';
import {Layout} from 'antd'

const {Content} = Layout

class App extends Component<any, any> {
    render() {
        return (
            <div className="App">
                <Clock/>
                <Content style={{ padding: '0 150px' }}>
                    <UsersF/>
                </Content>
            </div>
        );
    }
}

export default App;
