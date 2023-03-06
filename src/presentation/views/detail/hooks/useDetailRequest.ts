import useRequest from "../../../../application/hooks/useRequest";
import {IResponse} from "../../../../data/models/IResponse";
import {StartTransactionModel} from "../../../../data/models/StartTransactionModel";
import React, {useState} from "react";
import modalManager from "../../../../cross-cutting/utils/modalManager";

export default function () {
    const [formState, setFormState] = useState<StartTransactionModel>({productGuid: '70940884-E688-4C01-BBF8-F1CE3697FFE3'} as StartTransactionModel);
    const {post} = useRequest();

    async function startTransaction(modalOut:string, modalIn:string) {
        modalManager.hideModal(modalOut);
        post<IResponse<string>, StartTransactionModel>('PSECatchment/StartTransaction', {...formState})
            .then(res => {
                modalManager.showModal(modalIn);

                setTimeout(()=> location.replace(res.response), 1500);
            })
    }

    function formatAmount(value: number): string {
        return new Intl.NumberFormat('es-CO', {
            currency : "COP",
            style    : "currency"
        }).format(value)
    }

    function onChange(ev: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
        setFormState(prevState => ({
            ...prevState,
            [ev.target?.name] : ev.target?.value
        }))
    }

    return {
        formatAmount,
        onChange,
        formState,
        startTransaction,
    }
}
