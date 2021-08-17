import React, { Component, Fragment } from 'react'

export const AffichageUtilisateur = () => {

    return (
        <Fragment>
            <p>nom:{this.props.utilisateur.nom}</p>
            <p>prenom:{this.props.utilisateur.prenom}</p>
        </Fragment>
    )
}
