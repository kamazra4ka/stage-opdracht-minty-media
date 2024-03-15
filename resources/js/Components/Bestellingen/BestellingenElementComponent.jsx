import React from 'react';
import {CssVarsProvider, IconButton} from "@mui/joy";
import theme from "../../Theme/Primary.js";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Chip from "@mui/joy/Chip";
import DeleteIcon from '@mui/icons-material/Delete';

const BestellingenElementComponent = (props) => {

    let shoppingCart = props.shoppingCart;
    shoppingCart = JSON.parse(shoppingCart);

    let totalPrice = parseFloat(props.totalPrice) + parseFloat(props.tax);

    return (
        <CssVarsProvider theme={theme}>
            <div className='bestellingen-results-element'>
                <Card
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        marginBottom: '1rem',
                        '&:hover': {
                            boxShadow: '0 0 10px #ff7f00',
                            transition: 'all 0.2s ease',
                        },
                    }}
                >
                    <AspectRatio ratio="1" sx={{width: 90}}>
                        <img
                            src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="title-lg" id="card-description">
                            Order #{props.internalId}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                            <Link
                                overlay
                                underline="none"
                                sx={{color: 'text.tertiary'}}
                            >
                                Totaal prijs: €{totalPrice} (incl. €{props.tax} btw)
                            </Link>
                        </Typography>
                        <div className="bestellingen-chip-container">
                            {shoppingCart.map((element, index) => (
                                <Chip
                                    variant="outlined"
                                    color='primary'
                                    size="md"
                                    sx={{pointerEvents: 'none', marginBottom: '0.5rem'}}
                                >
                                    {element.domain}
                                </Chip>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </CssVarsProvider>
    );
};

export default BestellingenElementComponent;
