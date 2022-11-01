import React, { Component } from 'react'
import Countdown from 'react-countdown';


//render(<Timer date={Date.now() + 2000}/>, document.getElementById('root'));
class Timer extends Component{
  
  constructor() {
    super();
    this.state = {
      showForm: true
    };
  }

  handleComplete = () => {
    this.setState({showForm: false});
  }

  render() {
    return (
      <>
        <Countdown date={this.props.date} onComplete={this.handleComplete}>
          <p>Time Over !</p>
        </Countdown>
        {this.state.showForm && (
          <form>
            <input/>
          </form>
        )}
      </>
    );
  }
  
}

export default Timer