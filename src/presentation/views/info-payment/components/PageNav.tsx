import {Link} from "react-router-dom";
import utils from "../../../../application/helpers/utils";
import React from "react";

export default function () {
    return (
        <div className="page-nav no-margin row">
            <div className="container mt-5">
                <div className="row">
                    <h2 className="text-start">Información de pago</h2>
                    <ul>
                        <li>
                            <Link to={utils.resolveURL("")}>
                                <i className="bi bi-house-door"></i> Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}
