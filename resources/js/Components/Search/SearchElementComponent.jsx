import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import theme from "../../Theme/Primary.js";
import {CssVarsProvider} from "@mui/joy";

const SearchElementComponent = (props) => {

    const domainName = props.domainName;
    const domainPrice = props.domainPrice;
    const domainStatus = props.domainStatus;

    return (
        <CssVarsProvider
            theme={theme}
        >
            <div className='search-results-element'>
                <Card
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: '35vw',
                        marginBottom: '1rem',
                        '&:hover': {
                            boxShadow: '0 0 10px #cb761c',
                            transition: 'all 0.2s ease',
                        },
                    }}
                >
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
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
                                href="#interactive-card"
                                sx={{ color: 'text.tertiary' }}
                            >
                                {domainPrice}
                            </Link>
                        </Typography>
                        <Chip
                            variant="outlined"
                            color={domainStatus === 'Available' ? 'primary' : 'danger'}
                            size="md"
                            sx={{ pointerEvents: 'none' }}
                        >
                            {domainStatus}
                        </Chip>
                    </CardContent>
                </Card>
            </div>
        </CssVarsProvider>
    );
};

export default SearchElementComponent;
