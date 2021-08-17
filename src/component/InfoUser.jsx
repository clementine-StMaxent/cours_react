import React, { Component, Fragment, useState } from 'react'


export const InfoUser = () => {
    
    const [utilisateurModif, setutilisateurModif] = useState()
    const [enregistrerUser, setEnregistrerUser] = useState()

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         utilisateurModif : {
    //             nom : this.props.utilisateur.nom,
    //             prenom : this.props.utilisateur.prenom
    //         }
    //     }
    // }

    const handleChangeNom = (e) => {
        return { utilisateurModif, nom: e.target.value }
    }
    const handleChangePrenom = (e) => {
        return {
            utilisateurModif: { utilisateurModif, prenom: e.target.value }
        }
    }

        const handleClickValider = () => {
            return enregistrerUser(utilisateurModif)
        }

        return (
            <Fragment>
                <input onChange={(e) => handleChangeNom(e)} defaultValue={props.utilisateur.nom} />
                <input onChange={(e) => handleChangePrenom(e)} defaultValue={props.utilisateur.prenom} />
                <button onClick={() => handleClickValider}>OK !</button>
            </Fragment>
        )
    }
