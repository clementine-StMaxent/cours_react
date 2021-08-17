import logo from './logo.svg';
import './App.css';
import { ComponentClass } from './ComposantClass';
import { Component, Fragment , useState} from 'react';
import CompteurComponent from './CompteurComponent';
import {Utilisateur} from './component/Utilisateur';
import { TestReact } from './component/TestReact';
import { ChoixDynamique } from './jour2/ChoixDynamique';


export const App = () => {


  const [nom, setNom] = useState("St-Max")
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     nom: "St-Max"
  //   }
  // }

  const changeNom = () => {
    return ({ nom: this.state.nom === "St-Max" ? "Jean" : "St-Max" })
  }

    return (

      <Fragment>
        {/* <Accueil /> */}
        {/* <ComponentClass />
      <ComponentClass />
      <ComponentClass /> */}
        {/* <CompteurComponent />
        <ComponentClass modifNom={this.changeNom} nom = {this.state.nom}/> */}
        <Utilisateur />
        {/* <TestReact />
        <ChoixDynamique type="premier" val={"Thomas"} /> */}
      </Fragment>
    )
  }
