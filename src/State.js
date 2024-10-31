// import React, { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   console.log(count);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Clicked {count} {count === 1 ? "time" : "times"}
//       </button>
//     </>
//   );
// }

// import React, { Component } from "react";
// import PropTypes from "prop-types";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   render() {
//     let current = this.state.count;
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({ count: current + 1 });
//           }}
//         >
//           Clicked {current}
//         </button>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import Player from "./Player";
import players from "./players"; // Import your players array

class ShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    let playersList = players.map((player, index) => (
      <Player
        key={index}
        name={player.name}
        team={player.team}
        nationality={player.nationality}
        age={player.age}
        imageUrl={player.imageUrl}
        jerseyNumber={player.jerseyNumber}
      />
    ));
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && playersList}
      </div>
    );
  }
}

export default ShowHide;
