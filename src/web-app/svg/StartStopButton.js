import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio/player.js';

import * as AudioPlayer from '../audio/player.js';
import AudioPlayer from '../audio/player.js';

    this.state = {click: true};
    this.clicked = this.clicked.bind(this);
    this.audioPlayer = new AudioPlayer();
  }
  componentDidMount() {
  }

  clicked(){
    console.log("clicked!");
    console.log(this.state.click);

    if(this.state.click === false)
    {
      this.setState({click: true});
      this.audioPlayer.pausePlay();
    }
    else if(this.state.click === true)
    {
      this.setState({click: false});
      this.audioPlayer.pausePlay();
    this.state = {click: false};

    this.clicked = this.clicked.bind(this);
  }
  componentDidMount() {
    this.clicked();
  }

  clicked(){
    console.log(this.state.click);

    //var test = new AudioPlayer();
    //test.pausePlay();

    if(this.state.click === false)
    {
      this.setState({click: true});
      console.log("hallo");
    }
    else if(this.state.click === true)
    {
      this.state = {click: false};
    }
  }

  render() {
    let clicked = this.state.click;

    let zero =
    {
      fill: "#323232",
    };

     let one =
         {
             fill: "#323232",
             stroke: "none",
         };
    return (
      <div onClick={this.clicked}>
        {clicked ? (
          <StartButton/>
       ) : (
         <StopButton/>
       )}
      </div>
    );
  }
}

class StopButton extends React.Component {

  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  stop() {

  //  PlayerJS.pausePlay();
  }

  render() {
    const {title} = this.props;

    let svgStyle={
      width: "16%",
      marginTop: "4%",
    }

    let zero =
    {
      fill: "#323232",
     }

     let one =
     {
       fill: "none",
       stroke: "#95989A",
      };

      let two =
      {
        fill: "none",
        stroke: "#95989A",
        strokeWidth: "8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
      };

    return (
      <div onClick={this.clicked}>
        {clicked ? (
          <div onClick={this.props.changeStartStop}>
            <svg x="0px" y="0px" viewBox="0 0 500 500">
              <g>
               <path style={zero} d="M493,7v486H7V7H493 M493-0.3H7C3-0.3-0.3,3-0.3,7v486c0,4,3.3,7.3,7.3,7.3h486c4,0,7.3-3.3,7.3-7.3V7C500.3,3,497-0.3,493-0.3L493-0.3z"/>
              </g>
              <polyline style={one} points="390.5,249.5 176.7,352.8 176.5,352.5 176.5,146.5 176.8,146.3 390.5,249.5 "/>
            </svg>
          </div>
       ) : (
         <div onClick={this.props.changeStartStop}>
           <svg x="0px" y="0px" viewBox="0 0 500 500">
             <g>
              <path style={zero} d="M493,7v486H7V7H493 M493-0.3H7C3-0.3-0.3,3-0.3,7v486c0,4,3.3,7.3,7.3,7.3h486c4,0,7.3-3.3,7.3-7.3V7C500.3,3,497-0.3,493-0.3L493-0.3z"/>
             </g>
             <path style={two} d="M168,103"/>
             <g>
              <rect x="175" y="91" style={zero} width="30" height="318"/>
              <rect x="295" y="91" style={zero} width="30" height="318"/>
             </g>
           </svg>
         </div>
       )}
      </div>
    );
  }
}

StartStopControl.propTypes = {
  changeStartStop: PropTypes.func,
};

class StartButton extends React.Component{

  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
  }

  start() {
//    PlayerJS.pausePlay();
    console.log("Run");
  }

  render() {

    let svgStyle={
      width: "16%",
      marginTop: "4%",
    }

    let zero =
    {
      fill: "#323232",
    }

     let one =
     {
       fill: "#323232",
       stroke: "none",
       strokeWidth: "8",
       strokeLinecap: "round",
       strokeLinejoin: "round",
       strokeMiterlimit: "10",
      }

     return (
         <svg style={svgStyle} x="0px" y="0px" viewBox="0 0 500 500" onClick={this.start}>
           <g>
           	<path style={zero} d="M493,7v486H7V7H493 M493-0.3H7C3-0.3-0.3,3-0.3,7v486c0,4,3.3,7.3,7.3,7.3h486c4,0,7.3-3.3,7.3-7.3V7C500.3,3,497-0.3,493-0.3L493-0.3z"/>
           </g>
           <polyline style={one} points="390.5,249.5 176.7,352.8 176.5,352.5 176.5,146.5 176.8,146.3 390.5,249.5 "/>
         </svg>
     );
   }
}

export default StartStopControl;
