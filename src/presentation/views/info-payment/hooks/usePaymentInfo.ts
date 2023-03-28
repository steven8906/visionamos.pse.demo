import {useEffect, useState} from "react";
import useRequest from "../../../../application/hooks/useRequest";
import {useParams} from "react-router-dom";
import {IResponse} from "../../../../data/models/IResponse";

export default function () {

    const [state, setState]         = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {get}                     = useRequest();
    const {paymentId}               = useParams();

    useEffect(() => {
        get<IResponse<string>>(`PsePayments/GetPaymentInfo/${paymentId}`)
            .then(res => setState(res.response))
            .finally(() => setTimeout(() => setIsLoading(false), 4000))
    }, []);

    return {
        state,
        isLoading,
        paymentId
    }
}
