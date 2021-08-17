import React, { useState } from 'react';
import { AffichageUtilisateur } from './AffichageUtilisateur';
import { InfoUser } from './InfoUser'

export const Utilisateur = () => {

    const [utilisateur = { nom, prenom }, setUtilisateur] = useState(utilisateur = { nom: 'St-Max', prenom: 'Clémentine' })


    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         utilisateur: {
    //             nom: "St-Max",
    //             prenom: "Clémentine"
    //         }
    //     }
    // }

    const enregistrerUser = (utilisateur) => {
        return ({ utilisateur: utilisateur })
    }
    return (
        <div>
            <AffichageUtilisateur utilisateur={utilisateur} />
            <InfoUser enregistrerUser={enregistrerUser}
                utilisateur={utilisateur} />
        </div>
    )
}
