import React, { Component } from "react";
import "./App.css";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.component";
import Navigation from "./components/Navigation/Navigation.component";
import Rank from "./components/Rank/Rank.component";
import Particles from "react-particles-js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.component";
import Signin from "./components/Signin/Signin.component";
import Register from "./components/Register/Register.component";

const particleOptions = {
  particles: {
    number: {
      value: 120,
    },
    size: {
      value: 2,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};
//
const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    email: "",
    name: "",
    entries: "",
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    //DOM Manipulation
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://dry-wave-12251.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://dry-wave-12251.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };
  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  render() {
    const { box, imageUrl, route, isSignedIn } = this.state;
    return (
      <div className='App'>
        <Particles params={particleOptions} className='particles' />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === "home" ? (
          <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        )}
      </div>
    );
  }
}

export default App;
