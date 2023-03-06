import {useContext} from "react";
import LoadingContext from "../contexts/LoadingContext";

export default function () {
    const {setLoading} = useContext(LoadingContext);

    function show() {
        setLoading(true);
    }

    function hide() {
        setTimeout(()=> setLoading(false), 1500);
    }

    return {
        show,
        hide
    }
}
