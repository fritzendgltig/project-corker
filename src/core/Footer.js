import React from 'react';

class Footer extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      const {title,colOneName,colTwoName,colThreeName} = this.props;

      let colOne =
      {
        width: "65%",
      }

      let colTwo =
      {
        width: "20%",
      }

      let colThree =
      {
        width: "15%",
      }

      return (
         <div>
           <footer>
             <div className="slideContainer">
              <input className="slider" type="range" min={1} max={100} defaultValue={50}/>
             </div>
             <div className="musicFolder">
               <h3>{title}</h3>
               <table>
                 <tbody>
                 <tr>
                   <th style={colOne}>{colOneName}</th>
                   <th style={colTwo}>{colTwoName}</th>
                   <th style={colThree}>{colThreeName}</th>
                 </tr>
                 <tr>
                   <td>daw</td>
                   <td>daw</td>
                   <td>daw</td>
                 </tr>
                 <tr>
                   <td>daw</td>
                   <td>daw</td>
                   <td>daw</td>
                 </tr>
                 <tr>
                   <td>daw</td>
                   <td>daw</td>
                   <td>daw</td>
                 </tr>
                 <tr>
                   <td>daw</td>
                   <td>daw</td>
                   <td>daw</td>
                 </tr>
               </tbody>
               </table>
             </div>
           </footer>
         </div>
      );
   }
}

export default Footer
