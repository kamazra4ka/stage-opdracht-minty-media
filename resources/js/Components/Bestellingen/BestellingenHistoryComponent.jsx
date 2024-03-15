import React, {useEffect} from 'react';
import {CssVarsProvider} from "@mui/joy";
import theme from "@/Theme/Primary.js";
import axios from "axios";
import BestellingenElementComponent from "@/Components/Bestellingen/BestellingenElementComponent.jsx";

const BestellingenHistoryComponent = () => {

    const [ordersHistory, setOrdersHistory] = React.useState([]);

    useEffect(() => {
        const getOrdersHistory = async () => {
            try {
                const response = await axios.get('http://localhost:8008/api/orderhistory');
                setOrdersHistory(response.data);
            } catch (error) {
                console.error('Failed to fetch orders history:', error);
            }
        };

        getOrdersHistory();
    }, []);

    console.log(ordersHistory);

    if (ordersHistory.length > 10) {
        ordersHistory.splice(10, ordersHistory.length - 10);
    }

    if (!ordersHistory || ordersHistory.length === 0) {
        return (
            <CssVarsProvider
                theme={theme}
            >
                <div className="winkelwagen-content-container">
                    <h1 className="winkelwagen-content-h1">Er zijn geen orders</h1>
                </div>
            </CssVarsProvider>
        );
    }

    return (
        <CssVarsProvider
            theme={theme}
        >
            <div className="winkelwagen-content-container">
                <h1 className="winkelwagen-content-h1">Orders</h1>
                {ordersHistory.map((element, index) => (
                    <BestellingenElementComponent
                        key={index}
                        internalId={element.internalId}
                        shoppingCart={element.shoppingCart}
                        totalPrice={element.totalPrice}
                        tax={element.tax}
                    />
                ))}
            </div>
        </CssVarsProvider>
    );
};

export default BestellingenHistoryComponent;
