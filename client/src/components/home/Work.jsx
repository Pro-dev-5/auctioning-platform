import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const AppWork = ({ seller })=>{
        const navigate = useNavigate()
        return (
            <div id='sell' className='block worksBlock'>
                <div className='container-fluid'>
                    <div className='titleHolder' style={{ color: '#fff', textAlign: 'center', fontFamily: 'Nunito'}}>
                        Sell with <span style={{ backgroundColor: '#7b6322', padding: '2px 4px' }}>Bidding for Stuffs</span>
                        <p>Curious to know if your item is suitable for one of our upcoming sales?</p>
                        <p>Provide information and share images to request an online estimate now.</p>
                        <Button onClick={()=>navigate(`/sellerhome/${seller?.id}`)} style={{ backgroundColor: '#fff', border: 'none', color: '#100d10', borderRadius: '5px', width: '150px', fontFamily: 'Nunito', fontWeight: '700'  }}>Add product</Button>
                    </div>
                </div>
            </div>
        )
}

export default AppWork