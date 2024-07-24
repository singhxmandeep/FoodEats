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
          const token = localStorage.getItem('authToken');
          const response = await axios.post(`${url}/api/order/verify`, { success, orderId }, {
            headers: { Authorization: `${token}` }
          });
      
          if (response.data.success) {
            navigate("/myorders");
          } else {
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
