export default class FetchClient {
    static ENDPOINT = process.env.REACT_APP_HOST_TOOLBOX_API;

    static Method = {
        GET: "GET",
        POST: "POST",
        PATCH: "PATCH",
        DELETE: "DELETE",
        PUT: "PUT",
    };

    static async fetch(path, options) {
        console.log(FetchClient.ENDPOINT)
        const url = new URL(FetchClient.ENDPOINT + path);

        const optionsWithHeaders = this.withHeaders(options);

        console.debug(
            `[services/fetch.client] ${optionsWithHeaders.method} ${
                url.href
            } ${JSON.stringify(optionsWithHeaders)}`
        );

        return fetch(url.href, optionsWithHeaders);
    }

    static withHeaders(options) {
        const headers = {
            accept: "application/json",
            "Content-Type": "application/json",
            ...options.headers,
        };

        return {...options, headers};
    }
}
