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
              <div key={item._id}>
                <div  className="particular-hero-wrapper">
                  {item.name && (<p className="particular-hero-name">{item.name}</p>)}
                  <div className="particular-hero-text">
                    {item.birth && item.birth !== "NaN" && (<p><span>Birth:</span> {item.birth}</p>)}
                    {item.death && item.death !== "NaN" && (<p><span>Death:</span> {item.death}</p>)}
                    {item.gender && item.gender !== "NaN" && (<p><span>Gender:</span> {item.gender}</p>)}
                    {item.hair && item.hair !== "NaN" && (<p><span>Hair:</span> {item.hair}</p>)}
                    {item.height && item.height !== "NaN" && (<p><span>Height:</span> {item.height}</p>)}
                    {item.race && item.race !== "NaN" && (<p><span>Race:</span> {item.race}</p>)}
                    {item.realm && item.realm !== "NaN" && (<p><span>Realm:</span> {item.realm}</p>)}
                    {item.spouse && item.spouse !== "NaN" && (<p><span>Spouse:</span> {item.spouse}</p>)}
                  </div>
                </div>
                {item.wikiUrl && (<div className="particular-hero-link">
                 <p><a href={item.wikiUrl} target="_blank">LOTR Wiki link</a></p>
                </div>)}
              </div>
              )
            })}
        </div>
      )
    }
  }

  render() {
    return(
      <div className="ParticularHero_conatiner ">
        <div className="ParticularHero_img box_left">

        </div>
        <div className="ParticularHero_info box_right">
          {this.renderParticularHero()}
        </div>
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