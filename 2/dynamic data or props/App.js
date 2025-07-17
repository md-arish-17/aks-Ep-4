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

const CardContainer = ({resName,cuisine,rating,arrival,imgUrl})=>{
    return(
        <div className='card'>
            <img src={imgUrl}/>
            <h2>{resName}</h2>
            <h3>{cuisine}</h3>
            <p>{rating}</p>
            <p>{arrival}</p>
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
                <CardContainer resName='Arish Food'cuisine="Hydrabadi Biryani, Indian" rating="4.4 Stars" arrival="27 Minutes" imgUrl='https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=2048&q=75'/>
                <CardContainer resName='umar Food'cuisine="Hydrabadi kabab, Indian" rating="4 Stars" arrival="7 Minutes" imgUrl="https://blog.swiggy.com/wp-content/uploads/2024/06/Image-3_Kadhai-Chicken-1024x538.png"/>
                <CardContainer resName='usman Food'cuisine="Hydrabadi paaye, Indian" rating="4.9 Stars" arrival="17 Minutes" imgUrl="https://cdn.shopify.com/s/files/1/0261/7960/0481/files/butter_chicken_masala_480x480.jpg?v=1693674488"/>
                <CardContainer resName='zaheen Food'cuisine="Hydrabadi manchurian, Indian" rating="4.8 Stars" arrival="97 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswoXwP9GlqNV5smM87IEbydhx1CuyavsJaw&s"/>
                <CardContainer resName='anas Food'cuisine="Hydrabadi kofta, Indian" rating="4.3 Stars" arrival="67 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUuI8Aelgkzr3TE7yCZrue2Tqu-fiW5AmBA&s"/>
                <CardContainer resName='sana Food'cuisine="Hydrabadi qeema, Indian" rating="4.1 Stars" arrival="47 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw3eAwSaXl_Oc1lHEek7Mz0ICHJ5U6wimmg&s"/>
                <CardContainer resName='rehan Food'cuisine="Hydrabadi paneer, Indian" rating="4.6 Stars" arrival="07 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxr342A_y4YFMfmRgq6yCnGZz9yLY7d9anA&s"/>
                <CardContainer resName='ayan Food'cuisine="Hydrabadi chhole, Indian" rating="4.4 Stars" arrival="57 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7Z5nRE3FA9GtDR17PVIRhce8KziLUJm9_w&s"/>
                <CardContainer resName='hajra Food'cuisine="Hydrabadi dabeli, Indian" rating="4.8 Stars" arrival="67 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEU-fKqQc0FyAAT3GSDFFL8CnTYDOZ8_aHw&s"/>
                <CardContainer resName='aman Food'cuisine="Hydrabadi burger, Indian" rating="4.1 Stars" arrival="97 Minutes" imgUrl="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/03/fish-pakora-768x1152.webp"/>
                <CardContainer resName='fatima Food'cuisine="Hydrabadi soup, Indian" rating="4.0 Stars" arrival="27 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNibMMfNJu0Mkfth34RqPJrxNYB2ierK8-A&s"/>
                <CardContainer resName='mukhtar Food'cuisine="Hydrabadi noodles, Indian" rating="4.3 Stars" arrival="37 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTVD5O7o9TfizTK9dB7jNWsdN5tvhZz5gNQ&s"/>
                <CardContainer resName='abdul Food'cuisine="Hydrabadi chicken, Indian" rating="4.2 Stars" arrival="17 Minutes" imgUrl="https://static.independent.co.uk/2024/07/01/12/Photo%2013-06-2024%2C%2013%2024%2026.jpg"/>
                <CardContainer resName='mohit Food'cuisine="Hydrabadi roti, Indian" rating="4.7 Stars" arrival="37 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuG0kzlLig2R3EtrEMr7ZJc1huFYXjozpLA&s"/>
                <CardContainer resName='virat Food'cuisine="Hydrabadi lassi, Indian" rating="4.4 Stars" arrival="87 Minutes" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmV3oz_ruhHh3nt82R3yujErWFV-Uj9Gy7Lg&s"/>

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