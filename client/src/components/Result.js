import React from 'react';
import '../styles/Result.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'



class Result extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          return
        }
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

                    { this.props.hexColor.length !== 0 ?
                        <div id="result" className= "text-center my-3 animate__animated animate__fadeInDown" style={{backgroundColor: `${this.props.hexColor[0]}`}}>
                            {this.disableForm()}
                            <div className="exit"><Button id ="exitBtn" variant="light" onClick={() =>this.refresh()} className="btn btn-warning">x</Button></div>
                            <div>
                                <div id="resultContents">
                                    <h3><strong>Your color of the Day:</strong><br/>{this.props.color}</h3>
                                    <h2>{this.props.name}<img id="signImg" src={this.props.icon} alt={this.props.zodiac} /></h2>
                                    <h3><strong>Zodiac Sign:</strong><br/> {this.props.zodiac}</h3>
                                </div>
                                <p><strong>Advice for the week:</strong><br/> {this.props.data}</p>
                            </div>
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
