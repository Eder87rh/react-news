import React, { Component } from 'react';

class App extends Component {
  state = {
    noticias: []
   }

  async componentDidMount() {
    this.consultarNoticias();
  }
  
  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=6099896616084c37b615978f83f2961d`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
  
    this.setState({ 
      noticias: noticias.articles 
    })
  }

  render() { 
    return ( <h1> Noticias api react</h1> );
  }
}
 
export default App;
