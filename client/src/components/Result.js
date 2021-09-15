import React from 'react';
import '../styles/Result.css';
import Spinner from 'react-bootstrap/Spinner';



class Result extends React.Component {

    state ={
        data: this.props,
        loading: true,
        nameColor: ""
    }


    loadData = (props) => {
        this.setState({loading: false});


    }
    isLoading = () => {
        this.loadData(this.props)
    }

    colorName = (hex) => {
        let hexcode = hex[0].replace(/[^a-zA-Z ]/, "")

        fetch(`https://www.thecolorapi.com/id?hex=${hexcode}`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(newData => {

                    this.setState({
                        nameColor: newData.name.value
                    })
                })
                this.colorOfTheDay(this.state.nameColor)

        }

        colorOfTheDay = (str) => {
           return <p><strong>Your color of the Day:</strong><br/> {str}</p>
        }



    render(){

        return (


                <div>
                    { Object.keys(this.state.data).length > 0 ?
                        <div id="result" className= "text-center my-3" style={{backgroundColor: `${this.props.colorState[0]}`}}>
                            <h2>{this.props.nameState}</h2>
                            <p>Sign: {this.props.zodiacState}</p>
                            <p><strong>General advice:</strong><br/> {this.props.data}</p>
                            {this.colorName(this.props.colorState)}
                        </div>
                        :
                        <>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            <p>Please wait..</p>
                        </>
                    }
                </div>
        )
    }
}

export default Result;
