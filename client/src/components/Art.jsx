import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

// const { Meta } = Card;

// function ArtCard({ coverImage }) {
// 	return (
//   <Card
//     style={{
//       width: 300,
//     }}
//     cover={
//       <img
//         alt="default art image"
//         src={!coverImage ? require('../assets/art.jpeg') : coverImage}
//       />
//     }
    
//   >
// 		{/* actions={[
//       <SettingOutlined key="setting" />,
//       <EditOutlined key="edit" />,
//       <EllipsisOutlined key="ellipsis" />,
//     ]} */}
//     {/* <Meta
//       avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
//       title="Card title"
//       description="This is the description"
//     /> */}
//   </Card>
// 	)
// }

function Art({ url }) {
	const [art, setArt] = useState([])

	useEffect(()=>{
		console.log('fetching');
		fetch(`${url}/products`)
		.then(res=>{
			if(res.ok){
				res.json().then(console.log)
			}
		})
	},[])
	return (
		<div>
			{/* <ArtCard/> */}
		</div>
	)
}

export default Art