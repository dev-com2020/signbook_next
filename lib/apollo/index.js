import { useMemo } from 'react';
import {
    ApolloClient,
    HttpLink,
    InMemoryCache
} from '@apollo/client';

let apolloClient;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({ uri: 'http://localhost:3000' }),
        cache: new InMemoryCache(),
    });
}

export function initApollo(initialState = null) {
    const client = apolloClient || createApolloClient();
    if (initialState) {
        const existingCache = client.extract();
        client.cache.restore({...existingCache, ...initialState});
    }
    if (typeof window === 'undefined'){
        return client;
    }

    if (!apolloCLient) {
        apolloCLient = client;
    }
    return client;
}

export function useApollo(initialState) {
    return useMemo(() => initApollo(initialState),[initialState]);
}