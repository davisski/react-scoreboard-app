import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
  render(){
    const {removePlayer, name, score, changeScore, id, index} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter
            index={index} 
            score={score}
            changeScore={changeScore}    
            />
      </div>
    );
  }
}

export default Player;