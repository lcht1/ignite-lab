import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4oogncg0o5j01z4ehbf11et/master",
    cache: new InMemoryCache(),
});
