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

const WinkelwagenElementComponent = (props) => {

    const domainName = props.domainName;
    const domainPrice = props.domainPrice;

    const deleteElement = () => {
        let shoppingCart = localStorage.getItem('winkelwagen');
        shoppingCart = JSON.parse(shoppingCart);
        shoppingCart = shoppingCart.filter((element) => element.domain !== domainName);
        localStorage.setItem('winkelwagen', JSON.stringify(shoppingCart));

        window.location.reload();
    }

    return (
        <CssVarsProvider theme={theme}>
            <div className='search-results-element'>
                <Card
                    variant="outlined"
                    orientation="horizontal"
                    onClick={() => deleteElement()}
                    sx={{
                        width: '35vw',
                        marginBottom: '1rem',
                        '&:hover': {
                            boxShadow: '0 0 10px #ff7f00',
                            transition: 'all 0.2s ease',
                        },
                    }}
                >
                    <AspectRatio ratio="1" sx={{width: 90}}>
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-256/free-website-3582539-2991421.png"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <IconButton
                        aria-label="bookmark Bahamas Islands"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        onClick={() => deleteElement()}
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <CardContent>
                        <Typography level="title-lg" id="card-description">
                            {domainName}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                            <Link
                                overlay
                                underline="none"
                                sx={{color: 'text.tertiary'}}
                            >
                                {domainPrice}
                            </Link>
                        </Typography>
                        <Chip
                            variant="outlined"
                            color='primary'
                            size="md"
                            sx={{pointerEvents: 'none'}}
                        >
                            Available
                        </Chip>
                    </CardContent>
                </Card>
            </div>
        </CssVarsProvider>
    );
};

export default WinkelwagenElementComponent;
