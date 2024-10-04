import React from 'react'

const ReactContext = React.createContext({
  Data: [],
  myLib:[],
  presentId:"",
  searchQ:"",
  changeinp: () => {},
  presentIdd:()=>{},
  myLibfnc:()=>{},
})

export default ReactContext