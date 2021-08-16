import React from 'react'

export const Accueil = () => {
  return (
    <div style = {style.div}>
      <p style = {style.paragraphe}>Bonjour à tous</p>
    </div>
  )
}

const style = {
  paragraphe: {
    backgroundColor: "red",
    display: "inline-flex"
  },

  div: {
    backgroundColor: "yellow"
  }
}
