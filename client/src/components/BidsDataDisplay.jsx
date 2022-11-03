import React from 'react'
import { Card } from 'antd';

function BidsDataDisplay() {

    const navigate = useNavigate();
	const [product, setProduct] = useState([])
  const [formData, setFormData] = useState({
    productName: "",
    latestBidPrice: "",
    currentUser: "",
    category_id: "",
  });

  useEffect(()=>{
    fetch(`/api/categories`)
    .then(res=>res.json())
    .then(data => setProduct(data))

    .catch(err=>toast(err.message))
  }, [])

  function handleSubmit(e){
    e.preventDefault()
		try {
			fetch(`/api/products`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
					productName: formData.productName,
					latestBidPrice: formData.latestBidPrice,
					currentUser: formData.currentUser,
					category_id: formData.category_id,
				})
    })
    .then(r =>{
			if(r.ok){
				r.json().then(()=>{
					toast("Bid placed successiful")
					// navigate('/')
				})
			}
		})
		} catch (error) {
			console.log(error.message)
		}

    setFormData({
    productName: "",
    latestBidPrice: "",
    currentUser: "",
    category_id: "",

    })
	}

	function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
	}  

    return (
        <div className='block aboutBlock' style={{ marginTop: "80px", height: "65vh"}}>
            <div className="site-card-border-less-wrapper container-fluid">
                <Card
                title="Card title"
                bordered={true}
                style={{
                    width: 300,
                }}
                >
                <p>Product Name</p>
                <p>Latest bid</p>
                <p>Current User</p>
                <p>Category</p>
                </Card>
            </div>
        </div>
    )
}
export default BidsDataDisplay