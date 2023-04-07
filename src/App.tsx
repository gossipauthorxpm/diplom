import React from 'react';
import Header from "./components/header/Header";
import "./app.css";
import {BrowserRouter} from "react-router-dom";
import PageSelector from "./components/pages/PageSelector";

class App extends React.Component {

    render() {
        return <BrowserRouter>
            <div className={'app'}>
                <Header/>
                <PageSelector/>
            </div>
        </BrowserRouter>
    }
}

export default App;
