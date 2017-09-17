import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div className="row">
           <div className="col-md-4 offset-md-4">
              <Content myNumber = {this.state.data}></Content>
              <button className="btn btn-primary" onClick = {this.setNewNumber}>Click It! {this.state.data}</button>
            </div>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   render() {
      return (
         <div className = "card col-md-6">
           <div className="card-block">
              <h2 className="card-title">Lifecycle Hooks</h2>
              <h3 className="card-title">Check the console</h3>
              <p className="card-text">After five seconds the component will unmount</p>
            </div>
         </div>
      );
   }
}

export default App;
