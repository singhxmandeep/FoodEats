import React, { useContext, useEffect } from 'react';
import "./Verify.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

            if (response.data.success) {
                console.log("Payment verified successfully");
                navigate("/myorders");
            } else {
                console.log("Payment verification failed");
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [verifyPayment]);

    return (
        <div className='verify'>
            <div className="spinner">
                {/* Add spinner or loading indicator here */}
            </div>
        </div>
    );
};

export default Verify;
