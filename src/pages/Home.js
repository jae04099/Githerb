import React from 'react'
import './Home.css'
import Header from '../components/common/Header'
import HomeDesc from '../components/Home/HomeDesc'

const Home = () => {
    return (
        <>
        <div className="home">
            <Header />     
            <HomeDesc />
        </div>
        </>
    )
}

export default Home
