import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import DetailNewsCard from './DetailNewsCard'

const DetailNews = () => {
    const { id } = useParams()

    return (
        <div>
            <NavBar />
            <DetailNewsCard id={id} />
            <Footer />
        </div>
    )
}

export default DetailNews