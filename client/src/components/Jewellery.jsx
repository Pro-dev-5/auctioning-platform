import React from 'react'
import '../styles/Jewellery.css'
// import { card } from 'antd'
import './Jewellery.css'
import { Card } from 'antd'

function Jewellery() {
  return (
    <div>
        <div>
            <h3 className='jewel'>Jewelery</h3>
            <hr></hr>
        </div>
        <Card>
          hoverable
          style={{ width: 240}}
          cover={<img alt='ceramics' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'/>}
        </Card>
    </div>
  )
}

export default Jewellery