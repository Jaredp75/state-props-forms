import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props){
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleSongChange = this.handleSongChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }
  handleUserNameChange(e){
    this.setState({userName: e.target.value});
  }
  handleArtistChange(e){
    this.setState({songArtist: e.target.value});
  }
  handleSongChange(e){
    this.setState({songTitle: e.target.value});
  }
  handleNotesChange(e){
    this.setState({songNotes: e.target.value});
  }




  handleSubmit= (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="playlist-form">
          <input onChange={this.handleUserNameChange} type="text" className="form_control" id="user" placeholder="Name or User Name" value = {this.state.userName}/>
          <input onChange={this.handleArtistChange} type="text" className="form_control" id="artist" placeholder="Artist" value = {this.state.songArtist}/>
          <input onChange={this.handleSongChange} type="text" className="form_control" id="song" placeholder="Song" value = {this.state.songChange}/>
          <input onChange={this.handleNotesChange} type="text" className="form_control" id="notes" placeholder="Notes" value = {this.state.songNotes}/>
        </div>
        <div className="playlist-form">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    )
  }
}
