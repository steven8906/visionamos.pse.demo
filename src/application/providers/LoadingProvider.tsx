import {ReactNode, useState} from "react";
import LoadingContext from "../contexts/LoadingContext";

type Props = {
    children: ReactNode
}

export default function ({children}: Props) {
    const [state, setState] = useState(false);

    return (<>
        <LoadingContext.Provider value={{showLoading: state, setLoading: setState}}>
            {children}
        </LoadingContext.Provider>
    </>)
};
