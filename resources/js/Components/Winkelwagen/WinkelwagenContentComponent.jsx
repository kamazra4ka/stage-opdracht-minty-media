import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {CssVarsProvider} from "@mui/joy";
import theme from '../../Theme/Primary.js';
import WinkelwagenElementComponent from "@/Components/Winkelwagen/WinkelwagenElementComponent.jsx";


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
                        domainPrice={`${element.domainPrice}/jaar`}
                    />
                ))}
                <h1>BTW: ${tax}<br>
                </br>Your total is ${totalPrice}</h1>
            </div>
        </CssVarsProvider>
    );
};

export default WinkelwagenContentComponent;
