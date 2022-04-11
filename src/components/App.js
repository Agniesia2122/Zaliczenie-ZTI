import React, { Component, useState } from 'react';
import Menu from './Menu';
import BreedList from './BreedList';
import Image from './Image';
import '../style/App.css';
import Comments from './Comments';
import Portal from './Portal'
import Modal from './Modal'

class App extends Component {
    state= {
        breedsList: null,
        selectedBreed: null,
        error: false
    }
   componentDidMount() {
       this.fetchBreeds();
   }
   fetchBreeds = async () => {
       try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (response.ok) {
            const data = await response.json();
            this.setState({
                breedsList: Object.keys(data.message)
            })
        } else {
            this.setState({
                error: true
            })
            alert('Błąd połączenia!')
        }
        } catch (e) {
            this.setState ({
                error: true
            })
            alert('Błąd połączenia!')
        }
       }
       select = (breed) => {
           this.setState({
               selectedBreed: breed
           })
       }

    render( ) {
        console.log(this.state.selectedBreed);
        return (
            <div className="App">
                <Menu/>
                <BreedList breedsList={this.state.breedsList} onSelect={this.select} isError={this.state.error}/>
                <Image breed={this.state.selectedBreed}/>
                <Comments/>
                <Portal/>
                <Modal/>
                <button className="btn" onClick={this.onModalClick}>O co tu chodzi?</button>
            </div>
        );
    }
}

export default App;