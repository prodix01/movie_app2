import React, {Component} from "react";



class App extends Component {
    //상태값
    state = {
        count : 0
    };

    //함수
    add = () => {
        this.setState(current => ({count : current.count + 1}));
    };

    minus = () => {
        this.setState(current => ({count : current.count - 1}));
    };

    //라이프 사이클

    componentDidMount() {
        this.setState({count : 10});
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        const {count} = this.state;
        console.log("render");
        return (
            <div>
                <h1>State is : {count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        );
    }
};


export default App;
