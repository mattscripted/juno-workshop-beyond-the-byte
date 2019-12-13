import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import styles from './App.module.scss'
import { Routes } from './Routes'

export const App = () => (
  <Router>
    <main className={styles.app}>
      <Routes />
    </main>
  </Router>
)
