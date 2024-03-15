import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {CssVarsProvider} from "@mui/joy";
import theme from '../../Theme/Primary.js';
import {SearchHandler} from "@/Handlers/SearchHandler.js";
import SearchResultComponent from "./SearchResultsComponent.jsx";


const SearchComponent = () => {

    const [domain, setDomain] = React.useState('');
    const [searchResults, setSearchResults] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await SearchHandler(domain);
        console.log(response);
        setDomain('');
        setSearchResults(response);
    }

    return (
        <CssVarsProvider
            theme={theme}
        >
        <div className="search-content-container">
            <h1 className="search-content-h1">Alles begint met een domain</h1>
            <div className="search-searchbar">
                <form id="searchbar">
                    <FormControl>
                        <Input
                            sx={{'--Input-focused': 1, '--Input-decoratorChildHeight': '45px'}}
                            placeholder="Domains.nl"
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            endDecorator={
                                <Button
                                    variant="solid"
                                    color="primary"
                                    type="submit"
                                    onClick={handleSubmit}
                                    sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, fontSize: '1.2rem'}}
                                >
                                    Search
                                </Button>
                            }
                        />
                    </FormControl>
                </form>
            </div>
        </div>
         {searchResults && <SearchResultComponent results={searchResults} />}
        </CssVarsProvider>
    );
};

export default SearchComponent;
