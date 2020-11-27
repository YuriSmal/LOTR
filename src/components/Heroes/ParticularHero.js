import React from 'react';
import { Route, Switch} from "react-router-dom";

class ParticularHero extends React.Component {
    constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getParticularHeroInfo(this.props.match.params.id);
  }

  render() {
    return(
      <div>
          {this.props.heroes.map(item => {
            return(
              <h1>
              {item.name}
              </h1>
            )
          })}
      </div>
    )
    
  }
  

}

export default ParticularHero;