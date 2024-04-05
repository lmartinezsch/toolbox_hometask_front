import FetchClient from "./fetch.client";

class FileClient {
    static async fetchData(fileName) {

        const queryParams = fileName ? `?fileName=${fileName}` : ''
        const response = await FetchClient.fetch(`/files/data${queryParams}`, {
            method: FetchClient.Method.GET
        });

        return await response.json();
    }

}

export default FileClient