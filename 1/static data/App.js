import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ()=>{
    return(
        <div className='headerContainer'>
            <div className='header'>
                <div className='logo'>
                    <img src='https://marketplace.canva.com/EAGKDhXEhoY/1/0/1600w/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg'/>
                </div>
                <div className='listContainer'>
                    <ul className='navList'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const CardContainer = ()=>{
    return(
        <div className='card'>
            <img src='https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=2048&q=75'/>
            <h2>Arish's Food</h2>
            <h3>Hydrabadi Biryani, Indian</h3>
            <p>4.4 Stars</p>
            <p>27 Minutes</p>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className='bodyContainer'>
            <div className='search-container'>
                <input type='text'/>
                <button>Search</button>
            </div>
            <div className='cardContainer'>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>
                <CardContainer/>

            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)