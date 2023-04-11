import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
const App = () => {
  return (
    <>
      <Header>
        <Nav/>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App