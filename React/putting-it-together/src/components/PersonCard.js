import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = { ageCount : 0 }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount + 1
        })
    }
    render (){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h5>Age:{age + this.state.ageCount}</h5>
                <h5>Hair Color: {hairColor}</h5>
                <button style={{padding:10 + 'px'}} onClick={this.handleClick}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;