import FetchClient from "./fetch.client";

class FileClient {
    static async fetchData() {

        const response = await FetchClient.fetch(`/files/data`, {
            method: FetchClient.Method.GET
        });

        return await response.json();
    }

}

export default FileClient