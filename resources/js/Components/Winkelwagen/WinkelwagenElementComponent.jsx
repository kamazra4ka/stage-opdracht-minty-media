import React from 'react';
import {CssVarsProvider} from "@mui/joy";
import theme from "../../Theme/Primary.js";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Chip from "@mui/joy/Chip";

const WinkelwagenElementComponent = (props) => {

    const domainName = props.domainName;
    const domainPrice = props.domainPrice;

    return (
        <CssVarsProvider theme={theme}>
            <div className='search-results-element'>
                <Card
                    variant="outlined"
                    orientation="horizontal"
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
