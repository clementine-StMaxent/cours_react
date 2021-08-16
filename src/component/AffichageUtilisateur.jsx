import React, { Component,Fragment } from 'react'

export default class AffichageUtilisateur extends Component {

    render() {
        return (
            <Fragment>
                <p>nom:{this.props.utilisateur.nom}</p>
                <p>prenom:{this.props.utilisateur.prenom}</p>
            </Fragment>
        )
    }
}
