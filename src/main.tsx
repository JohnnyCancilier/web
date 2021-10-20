import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AuthProvinder } from './contexts/auth'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvinder>
      <App />
    </AuthProvinder>
  </React.StrictMode>,
  document.getElementById('root')
)
