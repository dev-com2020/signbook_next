import { useApollo } from "../lib/apollo";
import { ApolloProvider } from '@apollo/client';
import { Head } from 'next/head';


export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState || {});
    
    return (
        
        <ApolloProvider client={apolloClient}>
            <Head>
                <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
            </Head>
            <Component {...pageProps} />
        </ApolloProvider>
       
    );
}