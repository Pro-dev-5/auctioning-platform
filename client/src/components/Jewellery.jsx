import React from 'react'
import { Card } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import '../styles/ArtPage.css'

function Jewellery({ url }) {
	const [jewellery, setJewellery] = useState([])
  console.log(url)
	useEffect(()=>{
		fetch(`${url}/products`)
		.then(res=>{
      console.log(res)
			if(res.ok){
				res.json().then(setJewellery)
			}else{
				toast('Something went wrong with your request')
			}
		})
	},[])
	return (
		<div className="art-img">
			{
				(Array.isArray(jewellery) ? jewellery : []).filter(item=> item.category_id === 3)
				.map(item=>{
					return(
						<JewelleryCard item={item} key={item.id}/>
					)
				})
			}
			<ToastContainer/>
		</div>
	)
}

function JewelleryCard({ item }) {
	return (
  <Card
	className='card-img'
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="default art image"
        src={!item.image_1 ? "../../src/assets/artwork.jpeg" : item.image_1}
      />
    }
    
  >
	
		<h4>{item.name}</h4>
		<p>Location: {item.location}</p>
		<p>Start Price: {item.starting_price}</p>
		<p>Time: {item.time}</p>
  </Card>
	)
}
export default Jewellery;