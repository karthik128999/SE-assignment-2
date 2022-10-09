import { Component } from "react";
import profilePic from "../Images/apj2.jpg";

let defaultName = "A. P. J. Abdul Kalam";
let defaultDescription ="Avul Pakir Jainulabdeen Abdul Kalam was born on 15 October 1931, to a Tamil Muslim family in the pilgrimage centre of Rameswaram on Pamban Island, then in the Madras Presidency and now in the State of Tamil Nadu. His father Jainulabdeen Marakayar was a boat owner and imam of a local mosque; his mother Ashiamma was a housewife. His father owned a ferry that took Hindu pilgrims back and forth between Rameswaram and the now uninhabited Dhanushkodi. Kalam was the youngest of four brothers and one sister in his family. ";

class Home extends Component {
  state = { userName: defaultName, userDescription: defaultDescription };

  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ userDescription: event.target.value });
  };

  render() {
    const { userName, userDescription } = this.state;
    return (
      <div class="container ">
        <div class="row">
          <div class="col-3">
            <img class="w-100 h-120" src={profilePic} alt="profileImage" />
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <h1 class="main-heading">{userName}</h1>
            <p class="description d-inline-flex">{userDescription}</p>
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <div className="m-1">
              <label class="m-3" htmlFor="myUserName">
               Name
              </label>
              <input id="myUserName" onChange={this.onChangeName} type="text" />
            </div>
            <div class="m-1">
              <label class="m-3" htmlFor="myDescription">
                Description
              </label>
              <input
                id="myDescription"
                onChange={this.onChangeDescription}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;