import React from 'react'
import { createStore } from 'redux'

const App = () => {

  function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.text])
      default:
        return state
    }
  }

  const store = createStore(todos, ['Use Redux'])

  store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
  })

  console.log(store.getState())
  // [ 'Use Redux', 'Read the docs' ]
  return (
    <div></div>
  )
}

export default App