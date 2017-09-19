import React, { Component } from 'react';
import PlayListItem from '../components/PlayListItem.js';

export default class PlayList extends Component {

   constructor(props) {
      super(props);

      this.state = {
         state: []
      }
   }


   fetchData = (e) => {
       e.preventDefault();
       fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
         return results.json();
       }).then(data => {
         this.setState({songs: data});
       })
     }

     componentDidMount(){
       fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
             return results.json();
           }).then(data => {
             this.setState({songs: data});
             console.log("state", this.state.songs);
           })
     }




   

   render() {
      return (
         <div className = "card col-md-6">
           <div className="card-block">
             <form onSubmit={this.data} className="update-btn">
              <input type='submit' className='btn btn-primary' value='Update'/>
            </form>
            {this.state.songs.map(song => <PlayListItem song={song} key={song._id}/>)}
          </div>
         </div>
      )
   }
};

//export default App;
