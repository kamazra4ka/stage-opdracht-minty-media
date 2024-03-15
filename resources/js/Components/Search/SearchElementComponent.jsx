import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import theme from "../../Theme/Primary.js";
import {CssVarsProvider, Snackbar} from "@mui/joy";

const SearchElementComponent = (props) => {

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const domainName = props.domainName;
    const domainPrice = props.domainPrice;
    const domainStatus = props.domainStatus;
    const color = domainStatus === 'Available' ? '#ff7f00' : '#ff0000'

    const handleClick = async () => {

        let domain = domainName;
        let price = domainPrice;

        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('userId', userId);
        }

        const domainObject = {
            domain, domainPrice: price
        }

        let shoppingCard = localStorage.getItem('winkelwagen');
        if (!shoppingCard) {
            shoppingCard = [];
        } else {
            shoppingCard = JSON.parse(shoppingCard);
        }
        shoppingCard.push(domainObject);

        // remove duplicates
        shoppingCard = shoppingCard.filter((v,i,a)=>a.findIndex(t=>(t.domain === v.domain))===i)

        localStorage.setItem('winkelwagen', JSON.stringify(shoppingCard));

        setOpenSnackbar(true);

    }

    return (
        <CssVarsProvider
            theme={theme}
        >
            <Snackbar
                autoHideDuration={2000}
                open={openSnackbar}
                size='lg'
                variant='outlined'
                color='primary'
                onClose={(event, reason) => {
                    setOpenSnackbar(false);
                }}
            >
                {domainName} is toegevoegd aan uw winkelwagen!
            </Snackbar>
            <div className='search-results-element'>
                <Card
                    variant="outlined"
                    orientation="horizontal"
                    onClick={() => handleClick()}
                    sx={{
                        width: '35vw',
                        marginBottom: '1rem',
                        '&:hover': {
                            boxShadow: '0 0 10px ' + color,
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
