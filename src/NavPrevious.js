import React, {Component} from 'react';

export default class NavPrevious extends Component {
    constructor(props){
        super(props)
        
    }


    render(){
        return(
            <div>
                <button className="button" onClick={this.props.indexPrevious}>Previous!</button>
            </div>
        )
    }
}