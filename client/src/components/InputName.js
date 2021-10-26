import React from 'react';
import Result from './Result.js';
import '../styles/InputName.css';
import randomColor from 'randomcolor';


class InputName extends React.Component {


    state = {
        name: "",
        zodiac: "",
        data: null,
        result: false,
        hexColor: [],
        icon: "",
        color: ""
    }


    submitForm = (e) => {
        e.preventDefault();
        let nameData = this.state.name
        let zodiacData = this.state.zodiac
        let powerColor = {
            'Aries' : 'red',
            'Taurus' : 'green',
            'Gemini' : 'yellow',
            'Cancer' : 'monochrome' ,
            'Leo' : 'orange',
            'Virgo' : '#4b5320',
            'Libra' : 'blue',
            'Scorpio' : 'monochrome',
            'Saggitarius' : '#A020F0',
            'Capricorn' : '#964B00',
            'Aquarius' : '#007FFF',
            'Pisces' : '#90ee90'

        }

        if (!nameData || !zodiacData) {
            alert('Please fill all required field.')
        } else {


            fetch(`https://devbrewer-horoscope.p.rapidapi.com/week/short/${zodiacData}`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-rapidapi-host': 'devbrewer-horoscope.p.rapidapi.com',
                    'x-rapidapi-key': '03d3d82ab4mshc35210787820efap1d8f55jsn0fc7b41c1c9c'
                    }
                })
                .then(res => res.json())
                .then(newData =>
                    this.setState({
                        data: newData[`${zodiacData}`]['This Week'],
                        icon: newData[`${zodiacData}`]['Icon'],
                        result: true,
                        hexColor: randomColor({ count: 1, hue: `${powerColor[zodiacData]}`})
                    }))
                .then(() => {
                    let hexcode = this.state.hexColor[0].replace(/[^a-zA-Z ]/, "")
                
                    fetch(`https://www.thecolorapi.com/id?hex=${hexcode}`, {
                            method:  'GET',
                            headers: {
                                'Content-Type': 'application/json'
                                }
                            })
                            .then(res => res.json())
                            .then(newData => {
                                this.setState({
                                    color: newData.name.value
                                })
                            })
                })
        }

    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          return
        }
      }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    resetForm = () => {
        this.setState({
          name: '',
          zodiac: '',
          result: false
        });
    }

 

    render() {


        return (
            <>
            <div id="inputName">
                <h2 className="text-center my-5" id="formHeader">General Horoscope Advice</h2>
                <div id="formDiv"></div>
                <div>
                    <form className="d-flex" id="form">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Your first name"
                            value={this.state.name}
                            name="name"
                            onChange= {this.handleChange}
                        />


                        <div className="input-group mb-1">

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

                        <button id="submitBtn" type="submit" onClick={this.submitForm} className="btn btn-warning">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
                    {this.state.color !== "" ?
                        <Result
                        color={this.state.color}
                        icon={this.state.icon}
                        hexColor={this.state.hexColor}
                        data={this.state.data}
                        name={this.state.name}
                        zodiac={this.state.zodiac}
                        />
                        :
                        null}

        </>
        );

    }
}

export default InputName;
