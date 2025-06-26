import Newsletter from '../components/Newsletter'
import BlogList from '../components/BlogList'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import React from 'react'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <BlogList/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home