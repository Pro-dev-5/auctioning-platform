import { Col, Row, Card, Divider } from 'antd'

function CategoryComponent({name, description, image}) {

    return (
        <div className='category' style={{ display: 'flex', marginRight: '30px' }}>
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