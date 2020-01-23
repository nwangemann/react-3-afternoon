import React, {Component} from 'react';

export default class NavNext extends Component {
    constructor(props){
        super(props)
        
    }


    render(){
        return(
            <div>
                <button className="button" onClick={this.props.indexNext}>Next!></button>
            </div>
        )
    }
}