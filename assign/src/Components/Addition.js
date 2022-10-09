import { Component } from "react";

class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null
        };
    }
    //Function to be called when user makes a change
    myChangeHandler = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //nam becomes a computed property.
        // so it will not set "nam" instead will see the value of nam then set stuff,
    }

    render() {
        return (
            <div>
                <div className="row ">
                        <form onSubmit={this.mySubmitHandler}>
                            <div className="form-group justify-content-center">
                                <label htmlFor="firstNumber">Enter First Number</label>
                                <input
                                    type="number"
                                    name="firstNumber"
                                    id="firstNumber"
                                    className="form-control"
                                    onChange={this.myChangeHandler} />
                            </div>
                            <div className="form-group justify-content-center">
                                <label htmlFor="secondNumber">Enter Second Number</label>
                                <input
                                    type="number"
                                    name="secondNumber"
                                    id="secondNumber"
                                    className="form-control"
                                    onChange={this.myChangeHandler} />
                            </div>
                        </form>
                </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <h3> Result : {Number(this.state.firstNumber) + Number(this.state.secondNumber)} </h3>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Addition;