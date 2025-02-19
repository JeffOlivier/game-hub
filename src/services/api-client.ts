import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5d21884eff02426ea6539ca600cca11c",
    },
});

// We will use the APIClient to send various kinds of HTTP requests to a particular endpoint
class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + "/" + id)
            .then((res) => res.data);
    };

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    };
}

export default APIClient;
