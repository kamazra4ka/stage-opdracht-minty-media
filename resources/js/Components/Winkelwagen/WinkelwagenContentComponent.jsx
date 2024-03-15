import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {CssVarsProvider} from "@mui/joy";
import theme from '../../Theme/Primary.js';
import WinkelwagenElementComponent from "@/Components/Winkelwagen/WinkelwagenElementComponent.jsx";
import axios from "axios";


const WinkelwagenContentComponent = () => {

    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('userId', userId);
    }

    let shoppingCart = localStorage.getItem('winkelwagen');
    if (!shoppingCart) {
        shoppingCart = [];
    } else {
        shoppingCart = JSON.parse(shoppingCart);
    }

    let totalPrice = shoppingCart.map((element) => {
        return element.domainPrice;
    });

    totalPrice = totalPrice.map((element) => {
        return parseInt(element.split('€')[1]);
    }).reduce((a, b) => a + b, 0);

    totalPrice = totalPrice.toFixed(2);

    let tax = totalPrice * 0.21;
    tax = tax.toFixed(2);

    totalPrice = parseFloat(totalPrice) + parseFloat(tax);

    const handleSubmit = async () => {
        localStorage.setItem('winkelwagen', JSON.stringify([]));

        await axios.post('http://localhost:8008/api/order', {
            userId: userId,
            totalPrice: totalPrice,
            tax: tax,
            shoppingCart: shoppingCart
        })

        window.location.href = '/bestellingen';
    }

    if (shoppingCart.length === 0) {
        return (
            <CssVarsProvider
                theme={theme}
            >
                <div className="winkelwagen-content-container">
                    <h1 className="winkelwagen-content-h1">Jouw winkelwagen is nog leeg</h1>
                </div>
            </CssVarsProvider>
        )
    }

    return (
        <CssVarsProvider
            theme={theme}
        >
            <div className="winkelwagen-content-container">
                <h1 className="winkelwagen-content-h1">Jouw winkelwagen</h1>
                {shoppingCart.map((element, index) => (
                    <WinkelwagenElementComponent
                        key={index}
                        domainName={element.domain}
                        domainPrice={`${element.domainPrice}`}
                    />
                ))}
                <div className="winkelwagen-content-checkout-container">
                    <div className="winkelwagen-content-price-container">
                        <h1>BTW (21%): €{tax}<br>
                        </br>Jouw totaalprijs: €{totalPrice}</h1>
                    </div>
                    <Button onClick={() => handleSubmit()} variant="outlined" color="primary" size="lg">
                        Afrekenen
                    </Button>
                </div>
            </div>
        </CssVarsProvider>
    );
};

export default WinkelwagenContentComponent;
