import React from 'react';

class StartButton extends React.Component {
 render() {

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
      <svg x="0px" y="0px" viewBox="0 0 500 500">
        <g>
        	<path style={zero} d="M493,7v486H7V7H493 M493-0.3H7C3-0.3-0.3,3-0.3,7v486c0,4,3.3,7.3,7.3,7.3h486c4,0,7.3-3.3,7.3-7.3V7C500.3,3,497-0.3,493-0.3L493-0.3z"/>
        </g>
        <polyline style={one} points="390.5,249.5 176.7,352.8 176.5,352.5 176.5,146.5 176.8,146.3 390.5,249.5 "/>
      </svg>
    );
 }
}

export default StartButton;