import React from "react";
import { Card } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function BidsDataDisplay() {
    const [art, setArt] = useState([]);

    useEffect(() => {
        fetch(`/api/products`)
        .then((res) => {
            if (res.ok) {
            res.json().then(setArt);
            } else {
            toast("Something went wrong with your request");
            }
        })
        .catch((err) => toast(err.message));
    }, []);
    return (
        <div className="block aboutBlock" style={{ margin: '80px 0' }}>
        <div className="container-fluid">
            <div className='titleHolder'>
            Art Collections
            </div>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            {(Array.isArray(art) ? art : [])
                .filter((item) => item.category_id === 1)
                .map((item) => {
                return <BidsCard item={item} key={item.id} />;
                })}
            <ToastContainer />
            </div>
        </div>
        </div>
    );
    }

    function BidsCard({ item }) {
    const navigate = useNavigate()
    return (
        <div style={{ marginBottom: '40px' }}>
        <div>
            <div>
            <Row gutter={[40, 40]}>
                <Col span={8}>
                <Card
                title="Card title"
                bordered={true}
                style={{
                    width: 300,
                }}
                >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                </Col>
            </Row>
            </div>
        </div>
        </div>
    );
}
export default BidsDataDisplay;
