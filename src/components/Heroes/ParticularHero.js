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
                    {item.birth && (<p><span>Birth:</span> {item.birth}</p>)}
                    {item.death && (<p><span>Death:</span> {item.death}</p>)}
                    {item.gender && (<p><span>Gender:</span> {item.gender}</p>)}
                    {item.hair && (<p><span>Hair:</span> {item.hair}</p>)}
                    {item.height && (<p><span>Height:</span> {item.height}</p>)}
                    {item.race && (<p><span>Race:</span> {item.race}</p>)}
                    {item.realm && (<p><span>Realm:</span> {item.realm}</p>)}
                    {item.spouse && (<p><span>Spouse:</span> {item.spouse}</p>)}
                  </div>
                </div>
                <div className="particular-hero-link">
                  {item.wikiUrl && (<p><a href={item.wikiUrl} target="_blank">LOTR Wiki link</a></p>)}
                </div>
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