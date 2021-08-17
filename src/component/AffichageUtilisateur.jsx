import React, { Component, Fragment,useState } from 'react'

export const AffichageUtilisateur = () => {

    // const [utilisateur, setUtilisateur] = useState()
    const [utilisateur, setUtilisateur] = useState({ nom: "St-Max", prenom: "Clémentine" })


    return (
        <Fragment>
            <p>nom:{utilisateur.nom}</p>
            <p>prenom:{utilisateur.prenom}</p>
        </Fragment>
    )
}
