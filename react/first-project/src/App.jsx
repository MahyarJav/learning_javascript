import React from 'react'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'
import './App.css'

export default function App() {
  return (
    <React.StrictMode>
      <Header />
      <MainContent />
      <Footer />
    </React.StrictMode>
  )
}

