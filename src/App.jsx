import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
import "./App.css"
const App = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <div className='container'>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>

  )
}

export default App