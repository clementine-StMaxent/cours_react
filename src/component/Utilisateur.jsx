import React, { Component } from 'react'
import AffichageUtilisateur from './AffichageUtilisateur'
import InfoUser from './InfoUser'

export default class Utilisateur extends Component {
    constructor(props) {
        super(props)
        this.state = {
            utilisateur: {
                nom: "St-Max",
                prenom: "Clémentine"
            }
        }
    }

    enregistrerUser = (utilisateur) => {
        this.setState({utilisateur : utilisateur})
    }

    render() {
        return (
            <div>
                <AffichageUtilisateur utilisateur={this.state.utilisateur} />
                <InfoUser enregistrerUser={this.enregistrerUser}
                utilisateur={this.state.utilisateur} />
            </div>
        )
    }
}
