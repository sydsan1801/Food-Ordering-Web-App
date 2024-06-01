import React from 'react'
import Header from '../component/Header'
import RecomendedFood from '../component/RecomendedFood'
import Service from '../component/Service'
import NewFood from '../component/NewFood'
import Service2 from '../component/Service2'
import Special from '../component/Special'

const Home = () => {
  return (
    <div>
      <Header/>
      <RecomendedFood/>
      <Service/>
      <NewFood/>
      <Service2/>
      <Special/>
    </div>
  )
}

export default Home
