import React, {Component} from 'react';
import '../styles/Result.css';



class Result extends Component {

    state ={
        name: this.props.nameState,
        gender: this.props.genderState,
        zodiac: this.props.zodiacState
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        let body = {
            firstname : this.state.name,
            gender: this.state.gender,
            sign: this.state.zodiac
        }

        if (!body) {
            alert('Please fill all required field.')
        } else {
            debugger
            fetch(`https://devbrewer-horoscope.p.rapidapi.com/week/short/${body.sign}`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
                    'x-rapidapi-key': '03d3d82ab4mshc35210787820efap1d8f55jsn0fc7b41c1c9c'
                }
            })
            .then(res => res.json())
            .then(data => {
                
                debugger
                if (data.error){
                    alert("Error adding your name. Please try again.")
                } else{
                    alert("Name Succesfully added!")
                    window.location= "/"
                }

            })

        }
    }


    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        
        return (

                <div>
                    { this.props ?
                    <div id="result" className= "text-center my-3" style={{backgroundColor: `${this.props.colorState[0]}`}}>

                        <h2>{this.props.nameState}</h2>
                        <p>Sign: {this.props.zodiacState}</p>
                        <p><strong>General advice:</strong><br/> {this.props.data}</p>
                    </div>
                    :
                    <div id="result" className= "text-center my-5" >

                        <h4>Sorry, There was an error on the search.</h4>
                        <p>Please try again.</p>

                    </div>
                }


                </div>
        )
    }
}

export default Result;
