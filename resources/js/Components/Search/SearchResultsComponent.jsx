import React from 'react';
import SearchElementComponent from "@/Components/Search/SearchElementComponent.jsx";

const SearchResultsComponent = (props) => {

    if (!props || !props.results) {
        return null;
    } else {
        console.log(props);
        let searchResults = props.results;
        console.log(searchResults)

        return (
            <div className='search-results-container'>
                {searchResults.map((element, index) => (
                    <SearchElementComponent
                        key={index}
                        domainName={element.domain}
                        domainPrice={element.price}
                        domainStatus={element.status}
                    />
                ))}
            </div>
        );
    }
};

export default SearchResultsComponent;
