import React, {useEffect, useState} from 'react'
import { toast, ToastContainer } from 'react-toastify'
import AppHero from '../home/Hero'
import About from '../home/About'
import AppCategory from '../home/Category'
import AppWork from '../home/Work'
import AppFaq from '../home/Faq'
import AppTeam from '../home/Team'
import AppContact from '../home/Contact'

function AppHome({seller}) {
    const [categories, setCategory] = useState([ ]);
    const path = ['/art', '/ceramics', '/jewellery']

    useEffect(()=>{
		fetch('/api/categories')
		.then(res=>{
			if(res.ok){
				// res.json().then(data => console.log(data))
				res.json().then(setCategory)
			}else{
				toast('Something went wrong with your request')
			}
		})
        .catch(err=>toast(err.message))
	},[])

    const allCategories = categories.map((category, ind) => {

        return (
            <AppCategory 
                path={path}
                ind={ind}
                key = {category.id}
                image = {!category.image ? "/images/art.webp" : category.image}
                name = {category.name}
                description = {category.description}
                // testing comments
            />
        )
    });

    return (
        <div className='main'>
            <AppHero />
	    <ToastContainer />
            {/* <AppCategory /> */}
            <div>
                <div id='category' className='block featureBlock bgGray'>
                    <div className='container-fluid'>
                        <div className='titleHolder'>
                            Categories
                        </div>
                        <div className='categoryBlock'>
                            { allCategories }
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <AppWork seller={seller}/>
            <AppFaq />
            {/* <AppTeam /> */}
            <AppContact />

        </div>
    )
}

export default AppHome
