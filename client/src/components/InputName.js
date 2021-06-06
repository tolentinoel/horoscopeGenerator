import React, {Component, Fragment} from 'react';
import Result from './Result.js';

class InputName extends Component {


    state = {
        name: "",
        gender: "",
        zodiac: "",
        data: null,
        result: false
    }


    submitForm = (e)=> {
        e.preventDefault();
        
        const nameData = this.state.name
        const genderData = this.state.gender
        const zodiacData = this.state.zodiac

        if (!nameData || !genderData || !zodiacData) {
            alert('Please fill all required field.')
        } else {
            fetch(`/names/${genderData}/${nameData}/${zodiacData}`)
            .then(response => response.json())
            .then(data => {
                    debugger
                if (data.length === 0)  {
                    this.setState({ data: [], result: true })
                    this.resetForm()
                }
                this.setState({ data: data, result: true })
                this.resetForm()
            })

        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    resetForm = () => {
        this.setState({
          name: '',
          gender: '',
          zodiac: ''
        });
    }

    render() {

        return (
            <Fragment>
                <h2 className="text-center my-5">Color of your name & General Horoscope Advice</h2>
                <form className="d-flex" >
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Your first name"
                        value={this.state.name}
                        name="name"
                        onChange= {this.handleChange}
                    />


                    <div className="input-group mb-1">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Gender Identity:</label>
                        <select
                            className="form-select"
                            id="inputGroupSelect02"
                            value= {this.state.gender}
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

                    <button type="submit" onClick={this.submitForm} className="btn btn-warning">Submit</button>
                    </div>
                </form>
                {this.state.result ? <Result data={this.state.data} nameState={this.state.name} genderState={this.state.gender} zodiacState={this.state.zodiac}/> : null }

            </Fragment>
        );

    }
}

export default InputName;
