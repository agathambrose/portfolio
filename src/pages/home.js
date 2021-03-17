import React from 'react'
import { ContactCard } from '../components/ContactCard/ContactCard'
import Header from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { Projects } from '../components/Projects/Projects'
import { Stack } from '../components/Stack/Stack'
    

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Stack />
            <Projects />
            <ContactCard/>
        </div>
    )
}

export default Home
