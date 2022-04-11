import React, { Component } from 'react';
import '../style/Image.css';

class Image extends Component {
  state = {
    image: require('../grafika/custom.png'),
    selectedBreed: null
  };
  componentDidUpdate() {
    if (this.props.breed !== this.state.selectedBreed) {
      this.setState({
        selectedBreed: this.props.breed
      });
      this.fetchImage();
    }
  }
  fetchImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${this.props.breed}/images/random`
    );
    const data = await response.json();
    const image = data.message;
    this.setState({
      image: image
    });
  };
  render() {
    return (
      <div className="image-container">
        <img className="image-card" alt="pieseł" src={this.state.image} />
      </div>
    );
  }
}

export default Image;