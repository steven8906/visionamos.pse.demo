import axios from "axios";
import useLoading from "./useLoading";

export default function () {
    const {show, hide} = useLoading();

    function post<T, U>(action: string, data: U) {
        show();
        return axios.post<T>(`${import.meta.env.VITE_URL_START_TRANSACTION}${action}`, data)
            .then(res => Promise.resolve(res.data))
            .finally(() => hide())
    }

    async function get<T>(action: string): Promise<T> {
        show();
        return axios.get<T>(`${import.meta.env.VITE_URL_START_TRANSACTION}/${action}`)
            .then(res => Promise.resolve(res.data))
            .finally(() => hide())
    }

    return {
        post,
        get,
    }
}
