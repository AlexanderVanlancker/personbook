import React, {Component} from 'react';

class Clock extends Component<any, any> {
    timeout: typeof setInterval | any;

    constructor(props: any) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;