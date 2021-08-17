import React, { Component,useState } from 'react';
import {Utilisateur} from './component/Utilisateur';

export const ComponentClass = () => {

    // constructor() {
    //     // appeler le construteur supérieur
    //     super()
    //     this.state = {
    //         elementState: 'peuImporte'
    //     }
    // }
    // constructor(props){
    //     super(props)
    // }


    const [props, setProps] = useState(props)
        return (
            <>
                {/* <h1>{this.state.elementState}</h1> */}
                {/* <p>{this.props.nom}</p>
                <button onClick={() => this.props.modifNom()}>Clique</button> */}
                {/* <button onClick= {() => this.setState ({elementState: "coucou"})}>click Button</button> */}
                {/* <button onClick={this.modifNom}>click Button</button> */}
                <Utilisateur />
            </>
        )
    }
