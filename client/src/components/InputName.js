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
        // debugger
        const nameData = this.state.name
        const genderData = this.state.gender

        if (!nameData || !genderData) {
            alert('Please fill all required field.')
        } else {
            fetch(`http://localhost:3000/names/${genderData}/${nameData}`)
            .then(response => response.json())
            .then(data => {

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
                <h1 className="text-center my-5">Color & Horoscope</h1>
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
                                <option value="aquarius">Aquarius</option>
                                <option value="pisces">Pisces</option>
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
