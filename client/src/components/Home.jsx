import React, {useEffect, useState} from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Col, Row, Card, Divider } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, PhoneOutlined } from '@ant-design/icons';
import CategoryComponent from './CategoryComponet';
import About from './About';
import Contact from './Contact';


function Home() {
    const [categories, setCategory] = useState([ ]);
    const path = ['/art', '/ceramics', '/jewellery']


    useEffect(()=>{
		fetch(`/api/categories`)
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
            <CategoryComponent 
                path={path}
                ind={ind}
                key = {category.id}
                image = {!category.image ? "../../public/images/art.webp" : category.image}
                name = {category.name}
                description = {category.description}
                // testing comments
            />
        )
    });
    <ToastContainer/>

    return (
        <div>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
                <h1 className="" style={{ paddingBottom: '20px' }}>Categories</h1>
                {/* Underline */}
                <div style={{ height: '4px', backgroundColor: '#ECC13B', width: '80px', position: 'absolute', top: '40px', left: '60px'}} />
            </div>

            {/* All categories */}
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>{ allCategories }</div>

            <About />
            <Contact />

        </div>
    )
}

export default Home;