import React from 'react';
import SearchElementComponent from "@/Components/Search/SearchElementComponent.jsx";
import {CheckDomainHandler} from "@/Handlers/SearchHandler.js";

const SearchResultsComponent = (props) => {

    if (!props || !props.results) {
        return null;
    } else {
        let searchResults = props.results;
        let searchDomain = props.domain;

        // find if searchDomain is available (filter out using name and extension)
        searchDomain = searchResults.filter(element => element.domain === searchDomain);

        if (searchDomain.length === 0) {
            searchDomain = [{status: 'unavailable'}];
        }

        searchResults = searchResults.filter(element => element.status !== 'unavailable');

        searchResults.sort((a, b) => {
            if (a.status === 'free') {
                return -1;
            }
            if (b.status === 'free') {
                return 1;
            }
            return 0;
        });

        return (
            <div className='search-results-container'>

                <h1 className="search-results-check">
                    {searchDomain[0].status === 'free' ? 'Dit domein is beschikbaar' : 'Dit domein is momenteel niet beschikbaar'}
                </h1>

                {searchResults.map((element, index) => (
                    <SearchElementComponent
                        key={index}
                        domainName={element.domain}
                        domainPrice={`€${element.price}/jaar`}
                        domainStatus={element.status === 'free' ? 'Available' : 'Not Available'}
                        domainStatusColor={element.status === 'free' ? 'primary' : 'danger'}
                    />
                ))}
            </div>
        );
    }
};

export default SearchResultsComponent;
