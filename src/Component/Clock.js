import React from "react";
import Button from './Button'
class Clock extends React.Component {
  state = { date: new Date(), local: "bn-BD" };
  componentDidMount() {
    this.runningClock = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.runningClock);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  countryEvent = () => {
    this.setState({
      local: "en-US",
    });
  };




  render() {
    console.log('Clock Component render');
    const { date, local } = this.state;
 
    return (
      <div>
        <h1 className="heading"> Clock : {date.toLocaleTimeString(local)} </h1>
        <Button change={this.countryEvent} enable ={false}> </Button>
      </div>
    );
  }
}

export default Clock;
