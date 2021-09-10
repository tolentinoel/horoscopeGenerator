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

            fetch('/names', {
                method:  "POST",
                mode: 'no-cors',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
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

                    {this.props.data.length !== 0 ?
                    <div id="result" className= "text-center my-3" style={{backgroundColor: `#${this.props.data[0].hexcode.replace(/\W+/g, "")}`}}>

                        <h2>{this.props.data[0].firstname}</h2>
                        <p>Sign: {this.props.data[0].sign}</p>
                        <p><strong>General advice:</strong><br/> {this.props.data[0].horoscope}</p>
                    </div>
                    :
                    <div id="result" className= "text-center my-5" >

                        <h4>Sorry, the name submitted is not yet in our database.</h4>
                        <p>Would you like to add your name to our database? Please confirm and submit the form below.</p>

                        <form className="d-flex" style={{flexDirection: 'column', width: '50%', margin: 'auto'}} >
                            <input
                                className="form-control"
                                type="text"
                                placeholder={this.state.name}
                                value={this.state.name}
                                name="name"
                                onChange= {this.handleChange}
                            />

                            <div className="input-group mb-1" style={{ justifyContent: 'center'}} >
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Gender Identity:</label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelect02"
                                    value= {this.state.gender}
                                    placeholder= {this.state.gender}
                                    name="gender"
                                    onChange= {this.handleChange}>
                                        <option >...</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                </select>

                                <label className="input-group-text" htmlFor="inputGroupSelect03">Zodiac:</label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelect03"
                                    value= {this.state.zodiac}
                                    placeholder = {this.state.zodiac}
                                    name="zodiac"
                                    onChange= {this.handleChange}>
                                        <option >...</option>
                                        <option value="Aries">Aries</option>
                                        <option value="Taurus">Taurus</option>
                                        <option value="Gemini">Gemini</option>
                                        <option value="Cancer">Cancer</option>
                                        <option value="Leo">Leo</option>
                                        <option value="Virgo">Virgo</option>
                                        <option value="Libra">Libra</option>
                                        <option value="Scorpio">Scorpio</option>
                                        <option value="Sagittarius">Sagittarius</option>
                                        <option value="Capricorn">Capricorn</option>
                                        <option value="Aquarius">Aquarius</option>
                                        <option value="Pisces">Pisces</option>
                                </select>
                            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Add Name</button>
                            </div>
                        </form>

                    </div>
                }


                </div>
        )
    }
}

export default Result;
