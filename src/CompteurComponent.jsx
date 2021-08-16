import React, { Component } from 'react'


export default class CompteurComponent extends Component {
    constructor() {
        super()
        this.state = {
            compteur: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ compteur: this.state.compteur + 1 })}>Compteur</button>
                <p>{this.state.compteur}</p>
            </div>
        )
    }
}
