import React, {Component} from 'react';
import '../styles/Result.css';


class Result extends Component {

    state ={
        newName: "",
        genderInput:"",
        zodiacInput: ""
    }

    handleSubmit = (e)=> {
        e.preventDefault();

        let body = {
            firstname: this.state.newName,
            gender: this.state.genderInput,
            sign: this.state.zodiacInput
        }

        if (!body) {
            alert('Please fill all required field.')
        } else {

            fetch('http://localhost:3000/names', {
                method:  "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
              })
              .then(res => res.json())
              .then(data => {

                if (data.error){
                    alert("Error adding your name. Please try again.")
                } else{
                    alert("Name Succesfully added!")
                    window.location.reload()
                }

            })

        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        // console.log(this.props.nameState, this.props.genderState, this.props.zodiacState)
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
                        <p>Would like to add your name to our database? Fill out the form below.</p>

                        <form className="d-flex" style={{flexDirection: 'column', width: '50%', margin: 'auto'}} >
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Your first name"
                                value={this.state.newName}
                                name="newName"
                                onChange= {this.handleChange}
                            />

                            <div className="input-group mb-1" style={{ justifyContent: 'center'}} >
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Gender Identity:</label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelect02"
                                    value= {this.state.genderInput}
                                    name="genderInput"
                                    onChange= {this.handleChange}>
                                        <option >...</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                </select>

                                <label className="input-group-text" htmlFor="inputGroupSelect03">Zodiac:</label>
                                <select
                                    className="form-select"
                                    id="inputGroupSelect03"
                                    value= {this.state.zodiacInput}
                                    name="zodiacInput"
                                    onChange= {this.handleChange}>
                                        <option >...</option>
                                        <option value="aries">Aries</option>
                                        <option value="taurus">Taurus</option>
                                        <option value="gemini">Gemini</option>
                                        <option value="cancer">Cancer</option>
                                        <option value="leo">Leo</option>
                                        <option value="virgo">Virgo</option>
                                        <option value="libra">Libra</option>
                                        <option value="scorpio">Scorpio</option>
                                        <option value="sagittarius">Sagittarius</option>
                                        <option value="capricorn">Capricorn</option>
                                        <option value="Aquarius">Aquarius</option>
                                        <option value="pisces">Pisces</option>
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
