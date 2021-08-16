import React, { Component, Fragment } from 'react'

export default class InfoUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            utilisateurModif : {
                nom : this.props.utilisateur.nom,
                prenom : this.props.utilisateur.prenom
            }
        }
    }

    handleChangeNom = (e) => {
        this.setState({utilisateurModif : {...this.state.utilisateurModif, nom:e.target.value}})
    }
    handleChangePrenom = (e) => {
        this.setState({utilisateurModif : {...this.state.utilisateurModif, prenom:e.target.value}})
    }
    handleClickValider = () => {
        this.props.enregistrerUser(this.state.utilisateurModif)
    }

    render() {
        return (
            <Fragment>
                <input onChange={(e) => this.handleChangeNom(e)} defaultValue={this.props.utilisateur.nom}/>
                <input onChange={(e) => this.handleChangePrenom(e)} defaultValue={this.props.utilisateur.prenom}/>  
                <button onClick={this.handleClickValider}>OK !</button>        
            </Fragment>
        )
    }
}
