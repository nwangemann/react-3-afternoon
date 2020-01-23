import React, {Component} from 'react';

export default class Card extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentIndex: 0
        }
    }

    render(){
        return(
            <div className="cardClass">
              <div>
                <h1 className="nameTitle">{this.props.name}</h1>
                <h2>From: {this.props.location}</h2>
                <h2>Job Title: {this.props.title}</h2>
                <h2>Employer: {this.props.employer}</h2>
                <ul>Favorite Movies: 
                    {this.props.favoriteMovies}
                </ul>
                </div>  
       
            </div>
        )
    }
}