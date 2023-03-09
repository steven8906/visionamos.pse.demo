import Testimonial from "../../../components/Testimonial";
import {Link, useParams} from "react-router-dom";
import React from "react";
import h3 from "../../../assets/img/h3.png";
import utils from "../../../application/helpers/utils";

export default function () {
    const {paymentId} = useParams();
    return (
        <>
            <div className="page-nav no-margin row">
                <div className="container mt-5">
                    <div className="row">
                        <h2 className="text-start">Información de pago</h2>
                        <ul>
                            <li><Link to={utils.resolveURL("")}><i className="bi bi-house-door"></i> Home</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-us big-padding">
                <div className="container-lg">
                    <div className="about-row row">
                        <div className="col-md-7">
                            <div className="abut-detail fs-6">

                                <p className="mb-3 h3">Hemos recibido la información de tu pago con
                                    número <b>#{paymentId}</b>, en breve serás notificado del estado de tu transacción.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={h3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial/>
        </>
    )
}
