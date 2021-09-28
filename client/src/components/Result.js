import React from 'react';
import '../styles/Result.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'



class Result extends React.Component {

    state ={
        data: this.props,
        loading: true,
        nameColor: ""
    }


    componentDidMount() {
        let hexcode = this.props.colorState[0].replace(/[^a-zA-Z ]/, "")

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

    }

    loadData = (props) => {
        this.setState({loading: false});


    }
    isLoading = () => {
        this.loadData(this.props)
    }


    disableForm = () => {
        document.getElementById("submitBtn").disabled = true
        document.getElementById("form").classList.add('disabledForm')
    }


    refresh = () => {
        document.getElementById("submitBtn").disabled = false
        document.getElementById("form").classList.remove('disabledForm')
        window.location.reload()
    }



    render(){

        return (

                <div className="resultDiv">

                    { Object.keys(this.state.data).length > 0 ?
                        <div id="result" className= "text-center my-3" style={{backgroundColor: `${this.props.colorState[0]}`}}>
                            {this.disableForm()}
                            <div className="exit"><Button id ="exitBtn" variant="light" onClick={() =>this.refresh()} className="btn btn-warning">X</Button></div>
                            <div >
                                <div id="resultContents">
                                    <h3><strong>Your color of the Day:</strong><br/>{this.state.nameColor}</h3>
                                    <h2>{this.props.nameState}</h2>
                                    <h3><strong>Zodiac Sign:</strong><br/> {this.props.zodiacState}</h3>
                                </div>
                                <p><strong>General advice:</strong><br/> {this.props.data}</p>
                            </div>
                            {/* <div>
                                <p><strong>Your color of the Day:</strong><br/>{this.state.nameColor}</p>
                            </div> */}
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
