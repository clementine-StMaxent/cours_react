import React from 'react'
import { Fragment } from 'react'
import { Button } from 'primereact/button'

export const Accueil = () => {
  return (
    <Fragment>
      <p>Bonjour</p>
      <Button label='Word'></Button>
    </Fragment>
  )
}

// const style = {
//   paragraphe: {
//     backgroundColor: "red",
//     display: "inline-flex"
//   },

//   div: {
//     backgroundColor: "yellow"
//   }
// }

export default Accueil;