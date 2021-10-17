import React from 'react';
import './card.css';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href={`${this.props.website}`} target="_blank"> 
            <div className="tc bg-light-green dib pa2 ma2  grow bw2 shadow-5  h-50">
                <img src={`https://robohash.org/${this.props.username}.png?set=set2?size=50x50`} alt="robots" />
                <div>
                    <h2>{this.props.username}</h2>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.occupation}</h4>
                    <h4>{this.props.email}</h4>
                </div>
            </div>
            </a>
        )
    }
}

export default Card;