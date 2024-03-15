import React from 'react';
import SearchElementComponent from "@/Components/Search/SearchElementComponent.jsx";

const SearchResultsComponent = (props) => {

    if (!props || !props.results) {
        return null;
    } else {
        let searchResults = props.results;

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

        console.log(searchResults[0])

        return (
            <div className='search-results-container'>
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
