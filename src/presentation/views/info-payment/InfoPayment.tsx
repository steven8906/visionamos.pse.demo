import Testimonial from "../../../components/layout/Testimonial";
import React from "react";
import usePaymentInfo from "./hooks/usePaymentInfo";
import PageNav from "./components/PageNav";
import InfoPayment from "./components/InfoPayment";

export default function () {
    const {isLoading, state, paymentId} = usePaymentInfo();
    return (
        <>
            {!isLoading && state !== "0" &&
                <div>
                    <PageNav/>
                    <InfoPayment isLoading={isLoading}>
                        <p className="mb-3 h3">Hemos recibido la información de tu pago con
                            número <b>#{paymentId}</b>, en breve serás notificado del estado de tu
                            transacción.
                        </p>
                    </InfoPayment>
                    <Testimonial/>
                </div>}
            {!isLoading && state === "0" &&
                <div>
                    <PageNav/>
                    <InfoPayment isLoading={isLoading}>
                        <p className={"h2"}><b>La operación se realizó con éxito.</b></p>
                        <br/>
                        <p className="mb-3 h3">Hemos recibido la información de tu pago con
                            número <b>#{paymentId}</b>.
                        </p>
                    </InfoPayment>
                    <Testimonial/>
                </div>}
            {isLoading &&
                <>
                    <PageNav/>
                    <InfoPayment isLoading={isLoading}>
                        <p className={"h3"}><b>Estamos cargando la información de su pago, espere un momento por
                            favor...</b></p>
                    </InfoPayment>
                    <Testimonial/>
                </>}
        </>
    )
}
