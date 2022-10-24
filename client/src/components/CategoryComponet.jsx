import { Col, Row, Card, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

function CategoryComponent({name, description, image, path, ind}) {
    const navigate = useNavigate()
    return (
        <div className='category' onClick={()=>navigate(path[ind])} style={{ display: 'flex', marginRight: '30px' }}>
            <div>
                <img src={image} alt="Hero" className='rounded' />
                <div style={{ backgroundColor: '#ECECEC' }}>
                    <div style={{ padding: '20px 8px' }}>
                        <p className='category-name'>{ name }</p>
                        <p className='category-description'>{ description }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryComponent