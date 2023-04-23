import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './component/header/header';
import Cards from './component/cards';
import Footer from './component/footer/footer';


class App extends Component{
  constructor(){
    super()
    this.state={
      eyDetails : [],
      searchText : " "

    }
  }

  componentDidMount(){
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then(res=>res.json())
    .then(user => this.setState(()=>{
      return {eyDetails:user}
    }))
  }
  // <script src="https://kit.fontawesome.com/021c70449c.js" crossorigin="anonymous"></script>

  render(){
    return(
      <div>
        <Header/>
        <div className="container">
         <Cards/>
        </div>
         <Footer/>
      </div>
     
     
    );
  }

}

export default App;
