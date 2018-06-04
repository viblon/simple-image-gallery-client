import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-grid-gallery';

class App extends Component {
    state = { users: [] };

    componentDidMount() {
        fetch('/images')
            .then(res => res.json())
            .then(users => this.setState({ users }))
            .then(() => console.log('users', this.state.users));
    }
    render() {
        const PHOTO_SET = this.state.users.map(function (item) {
            return {
                src: item.src,
                thumbnail: item.thumbnail,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption: "After Rain (Jeshu John - designerspics.com)"
            }
        })
        return (
            <Gallery
                images={PHOTO_SET}
                enableImageSelection={false}
            />
        );
    }
}

export default App;
