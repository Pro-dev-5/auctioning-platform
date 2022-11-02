import React from 'react'
import { Carousel, Button, Anchor } from 'antd';
const { Link } = Anchor;

const items = [
    {
        key: '1',
        title: 'Ancient Civilisations II – Neolithic Pottery including the Collection of Ronald W. Longsdorf',
        content: 'Following the success of the first auction of Ancient Civilisations – Neolithic Pottery including the Collection of Ronald W. Longsdorf in May 2022, this sale presents the second part to a curated selection of thirty-six pottery masterworks produced during the Neolithic period in China, including the thoroughly researched collection of Ronald W. Longsdorf.'
    },
    {
        key: '2',
        title: 'The John Golden Library: Book Illustration in the Age of Scientific Discovery',
        content: 'Small in number of volumes, but massive in visual impact, the books in the John Golden Library meticulously integrate natural history, travel, and Americana into a visually mesmerizing representation of the apex of the illustrated book in the golden age of scientific discovery.'
    },
    {
        key: '3',
        title: "A Journey Through China's History. The Dr Wou Kiuan Collection Part 3",
        content: 'Following the success of the first auction of Ancient Civilisations – Neolithic Pottery including the Collection of Ronald W. Longsdorf in May 2022, this sale presents the second part to a curated selection of thirty-six pottery masterworks produced during the Neolithic period in China, including the thoroughly researched collection of Ronald W. Longsdorf.'
    }
]

function AppHero() {
    return (
        <div id='hero' className='heroBlock' style={{ paddingTop: '70px' }}>
            <Carousel autoplay>
                {items.map(item => {
                    return (
                        <div className='container-fluid' key={item.key}>
                            <div className='content'>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className='btnHolder'>
                                    <div className='header'>
                                        {/* <Anchor targetOffset="65" style={{ backgroundColor: '#f3c180', color: '#fff', hover: 'none', padding: '6px 8px', border: 'none' }}>
                                            <Link href="#category" title="View Category" />
                                        </Anchor> */}
                                        <Button href="#category" style={{ color: "white", fontWeight: "bold", cursor: "pointer", border: "none", borderRadius: "5px", backgroundColor: '#f3c180' }}>View Categories</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default AppHero