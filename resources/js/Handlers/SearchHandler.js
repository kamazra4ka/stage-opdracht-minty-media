import axios, {isCancel, AxiosError} from 'axios';

export const SearchHandler = async (domain) => {

    let domainName = domain.split('.')[0];
    let domainExtension = domain.split('.')[1];

    let domainsArray = [
        {
            name: domainName,
            extension: domainExtension
        }
    ];

    let extensions = [
        'nl',
        'com',
        'net',
        'org',
        'info',
        'biz',
        'eu',
        'co',
        'tv',
        'us',
        'me',
    ]

    extensions.splice(extensions.indexOf(domainExtension), 1);

    // populate domainsArray with different extensions (nl, com, net, org, etc.)
    extensions.forEach(extension => {
        domainsArray.push({
            name: domainName,
            extension: extension
        });
    });

    const headers = {
        'Authorization': 'Basic f36a4c78c8b7f3782183cda40717f1d8e7d1981909fdd4c87c14e227548e11ed'
    }

    // this will send a request to my proxy that will then send a request to mintycloud, because of CORS
    const response = await axios.post('http://localhost:8008/api/v2/domains/op/search', {
        domainsArray
    }, {
        headers
    });

    return response.data;
}
