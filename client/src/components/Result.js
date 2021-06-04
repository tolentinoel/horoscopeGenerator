import React, {Component} from 'react';

class Result extends Component {
    
    render(){
        console.log(this.props.data[0].firstname)

        return (
            <div >
            <div className= "text-center my-5" style={{backgroundColor: `#${this.props.data[0].hexcode}`}}>
                <p>NAME</p>
                <h3>{this.props.data[0].firstname}</h3>
                <p>{this.props.data[0].meaning}</p>
            </div>
            </div>
        );
    }
}

export default Result;
