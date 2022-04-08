import React from 'react';

export default class Clock extends React.Component{
  constructor(){
    super();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
    const date = new Intl.DateTimeFormat('en-US', options).format(today);
    this.state = {
      time: time,
      date: date
    };
    this.tick = this.tick.bind(this);
    this.intervalId;
  }

  tick(){
    const today = new Date();
    const time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
    this.setState({time: time});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick,1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return (
      <div>
        <h1>Clock</h1>
        <div className='clock'>
          <div className='time'>
            <span>Time:</span>
            <span>{this.state.time} EST</span>
          </div>
          <div className="date">
            <span>Date:</span>
            <span>{this.state.date} EST</span>
          </div>
        </div>
      </div>
    )
  }
}