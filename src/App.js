import React from "react";
import axios from "axios";

import './App.css';


class App extends React.Component {
    state = {
        advice:  '' //is where to store variables more or less
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip

                this.setState({ advice }); // used to store a variable to be called elsewhere, if same name then has this syntx, otherwise { statevar: localvar }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Ask Andrew</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;