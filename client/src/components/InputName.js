import React, {Component, Fragment} from 'react';
import Result from './Result.js';

class InputName extends Component {


    state = {
        name: "",
        gender: "",
        data: null,
        result: false
    }


    submitForm = (e)=> {
        e.preventDefault();

        const nameData = this.state.name
        const genderData = this.state.gender

        if (!nameData || !genderData) {
            alert('Please fill all required field.')
        } else {
            fetch(`http://localhost:3000/names/${genderData}/${nameData}`)
            .then(response => response.json())
            .then(data => {
                // this.showResults(data)
                this.setState({ data: data, result: true })
                // this.resetForm()
            })

        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    // resetForm = () => {
    //     this.setState({
    //       name: '',
    //       gender: ''
    //     });
    // }

    showResults = (data) => {
        this.setState({result : true})

        data.map(obj => {
            const {firstname, gender, meaning, hex} = obj
            return (
                <Result name={firstname} gender={gender} meaning={meaning} color={hex} />
            )
        })

    }


    render() {

        return (
            <Fragment>
                <h1 className="text-center my-5">What's your name?</h1>
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

                    </div>
                    <button type="submit" onClick={this.submitForm} className="btn btn-warning">Submit</button>
                </form>
                {this.state.result ? <Result data={this.state.data}/> : null }
            </Fragment>
        );

    }
}

export default InputName;
