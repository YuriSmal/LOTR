import React from 'react';
import { connect } from 'react-redux';
import './ParticularHero.css'

class ParticularHero extends React.Component {
    constructor(props) {
    super(props);

    this.renderParticularHero = this.renderParticularHero.bind(this);
  }
  
  componentDidMount() {
    this.props.getParticularHeroInfo(this.props.match.params.id);
  }

  renderParticularHero() {
    const oneHero = this.props.oneHero;
    
    if(oneHero) {
      console.log(oneHero);
      return(
        <div>
            {oneHero.map(item => {
              return(
              <div key={item._id} className="particular-hero-wrapper">
                {item.name && (<p>Name: {item.name}</p>)}
                {item.birth && (<p>Birth: {item.birth}</p>)}
                {item.death && (<p>Death: {item.death}</p>)}
                {item.gender && (<p>Gender: {item.gender}</p>)}
                {item.hair && (<p>Hair: {item.hair}</p>)}
                {item.height && (<p>Height: {item.height}</p>)}
                {item.race && (<p>Race: {item.race}</p>)}
                {item.realm && (<p>Realm: {item.realm}</p>)}
                {item.spouse && (<p>Spouse: {item.spouse}</p>)}
                {item.wikiUrl && (<p><a href={item.wikiUrl} target="_blank">LOTR Wiki link</a></p>)}
              </div>
              )
            })}
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderParticularHero()}
      </div>
    ) 
  }
}

  const mapStateToProps = state => {
    return(
      {
        oneHero: state.characters.particularHero.data.docs
      }
    )
  }
 
export default connect(
  mapStateToProps
)(ParticularHero);