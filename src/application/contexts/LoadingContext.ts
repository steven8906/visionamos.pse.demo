import {createContext, useContext} from "react";

type LoadingContextProps = {
    showLoading :boolean,
    setLoading  : (val:boolean) => void
}

export const LoadingContext = createContext<LoadingContextProps>({
    showLoading: false,
    setLoading: ()=> {}
});

export default LoadingContext;
