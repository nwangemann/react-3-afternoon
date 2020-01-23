import React, {Component} from 'react';

export default class CardIndex extends Component {
    constructor(props){
        super(props)
        
    }


    render(){
        return(
            <div>
                <h1>{this.props.currentIndex}/25</h1>
            </div>
        )
    }
}