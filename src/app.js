import React from 'react'
import ReactDOM from 'react-dom'

import Message from './components/message.jsx'

import './styles/index.scss'

function App () {
  return (
    <div>
      <Message />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
