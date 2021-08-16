import logo from './logo.svg';
import './App.css';
import { ComponentClass } from './ComposantClass';
import { Component, Fragment } from 'react';
import CompteurComponent from './CompteurComponent';
import Utilisateur from './component/Utilisateur';
import { TestReact } from './component/TestReact';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nom: "St-Max"
    }
  }

  changeNom = () => {
    this.setState({ nom: this.state.nom === "St-Max" ? "Jean" : "St-Max" })
  }

  render() {
    return (

      <Fragment>
        {/* <Accueil /> */}
        {/* <ComponentClass />
      <ComponentClass />
      <ComponentClass /> */}
        {/* <CompteurComponent />
        <ComponentClass modifNom={this.changeNom} nom = {this.state.nom}/> */}
        <Utilisateur />
        <TestReact />
      </Fragment>
    )
  }
}

