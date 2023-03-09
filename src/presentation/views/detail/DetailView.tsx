import {Link} from "react-router-dom";
import useDetailRequest from "./hooks/useDetailRequest";
import modalManager from "../../../cross-cutting/utils/modalManager";
import React, {useState} from "react";
import h1 from "../../../assets/img/h1.jpg"
import utils from "../../../application/helpers/utils";

export default function () {
    const {formState: model, onChange, startTransaction} = useDetailRequest();

    return (<>
        <div className="page-nav no-margin row">
            <div className="container mt-5">
                <div className="row">
                    <h2 className="text-start">Miel Manuka</h2>
                    <ul>
                        <li><Link to={utils.resolveURL("")}><i className="bi bi-house-door"></i> Home</Link></li>
                        <li><Link to={utils.resolveURL("products")}><i className="bi bi-chevron-double-right pe-2"></i> Productos</Link>
                        </li>
                        <li><Link to={utils.resolveURL("detail")}><i className="bi bi-chevron-double-right pe-2"></i> Miel Manuka</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container-fluid big-padding bg-white about-cover">
            <div className="container">
                <div className="row about-row">
                    <div className="col-md-5 p-5 text-center">
                        <img src={h1} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h2>Miel de Manuka Pura Orgánica de Antioquia</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit libero pellentesque
                            libero interdum, id mattis felis dictum. Praesent eget lacus tempor justo efficitur
                            malesuada. Cras ut suscipit nisi eget lacus tempor justo efficitur.</p>
                        <b className="fs-3 py-4 text-danger">$144.000</b>
                        <span className="fs-5 ps-3">180.000</span>
                        <ul className="mt-0 mt-2 mb-3 vgth">
                            <li className="fs-8">
                                <i className="bi text-warning bi-star-fill"></i>
                                <i className="bi text-warning bi-star-fill"></i>
                                <i className="bi text-warning bi-star-fill"></i>
                                <i className="bi text-warning bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <span>4,2</span>
                            </li>
                            <li className="float-end gvi">
                                <i className="bi text-danger bi-heart-fill"></i>
                            </li>
                        </ul>
                        <ul className="key-features mt-2">
                            <li><i className="bi bi-caret-right"></i> Miel campesina de Antioquia</li>
                            <li><i className="bi bi-caret-right"></i> Miel pura orgánica</li>
                            <li><i className="bi bi-caret-right"></i> Miel que apoya el desarrollo económico de nuestros
                                campesinos
                            </li>
                            <li>
                                <br/>
                                <br/>
                                <button className="btn btn-primary shadow fs-5 fw-bolder px-5 py-2"
                                        onClick={() => modalManager.showModal('checkout')}>Pagar
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row product-detail">
                    <h4>Apoya el campo colombiano</h4>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu velit nec
                        neque tempus commodo. Mauris dictum nunc vitae elit porta blandit. Proin non laoreet odio. Sed
                        aliquet, turpis sodales mattis fringilla, massa nulla iaculis justo, sit amet imperdiet libero
                        orci eget neque. Morbi tincidunt vehicula vulputate. Vestibulum efficitur accumsan scelerisque.
                        Nulla rutrum neque id nunc aliquam suscipit. Fusce eget arcu aliquet, gravida massa non,
                        fringilla sem. Cras sapien dui, varius vitae nisi eget, tristique mattis justo. Fusce auctor
                        consequat leo, ac mattis sem fermentum condimentum. Suspendisse ultrices elementum diam eget
                        lobortis. Morbi et libero odio. Sed rutrum augue eget ante laoreet finibus.</p>
                    <p className="mb-3">Suspendisse pellentesque feugiat nunc, a finibus eros mollis at. Proin lorem
                        nisi, commodo vitae nibh sit amet, tempor posuere neque. Vivamus lobortis est nec libero
                        maximus, feugiat iaculis sem laoreet. Suspendisse porta egestas justo, feugiat gravida turpis.
                        Quisque ut tristique nibh, vel auctor erat. Proin eget finibus diam. Sed in tortor vitae risus
                        elementum iaculis.</p>
                    <p className="mb-3">Quisque vitae est elit. Phasellus sed quam felis. Sed eget nisi varius, finibus
                        eros vitae, porta quam. Aliquam pulvinar placerat placerat. Nulla at mattis sem. Nam eget auctor
                        massa, et tristique lacus. Sed lacus dolor, commodo ac blandit sit amet, lacinia id quam.
                        Vivamus hendrerit risus id lectus convallis, quis feugiat ligula auctor. Curabitur ante nulla,
                        vestibulum a eros vitae, ultricies molestie purus. Maecenas sed elit nec sapien tristique
                        tincidunt. Aliquam laoreet nulla ac metus mattis viverra. Fusce hendrerit, augue eget hendrerit
                        pellentesque, lorem nulla condimentum massa, efficitur pellentesque tortor sapien sed lectus.
                        Nullam et lorem ut turpis finibus facilisis in vel orci. Nunc vitae urna sit amet libero
                        scelerisque efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lectus
                        imperdiet, scelerisque nunc id, pharetra metus.</p>
                </div>
                <div className="row review">
                    <div className="col-md-8">
                        <h4>Opiniones</h4>
                        <div className="row m-0 reviewrow p-3 px-0 border-bottom">
                            <div className="col-md-12 align-items-center col-9 rcolm">
                                <div className="review">
                                    <li className="col-8 ratfac">
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                </div>
                                <h3 className="fs-6 fw-semi mt-2">Victor Hernández

                                    <small className="float-end fw-normal"> 20 Aug 2022 </small>
                                </h3>

                                <div className="review-text">
                                    Aliquam laoreet nulla ac metus mattis viverra. Fusce hendrerit, augue eget hendrerit
                                    pellentesque, lorem nulla condimentum massa, efficitur pellentesque tortor sapien
                                    sed lectus
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>

                        <div className="row m-0 reviewrow p-3 px-0 border-bottom">
                            <div className="col-md-12 align-items-center col-9 rcolm">
                                <div className="review">
                                    <li className="col-8 ratfac">
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                </div>
                                <h3 className="fs-6 fw-semi mt-2">Laura Amor

                                    <small className="float-end fw-normal"> 20 Aug 2022 </small>
                                </h3>

                                <div className="review-text">
                                    consectetur adipiscing elit. Nunc eget lectus imperdiet, scelerisque nunc id,
                                    pharetra metus.
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>

                        <div className="row m-0 reviewrow px-0">
                            <div className="col-md-12 align-items-center col-9 rcolm">
                                <div className="review">
                                    <li className="col-8 ratfac">
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi text-warning bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                </div>
                                <h3 className="fs-6 fw-semi mt-2">Juanita Peña

                                    <small className="float-end fw-normal"> 20 Aug 2022 </small>
                                </h3>

                                <div className="review-text">
                                    Great work, keep it up
                                </div>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="checkout" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Información Personal</h5>
                        <button type="button"
                                className="close btn"
                                onClick={() => modalManager.hideModal('checkout')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={async ev => {
                        ev.preventDefault();
                        await startTransaction('checkout', 'success');
                    }}>
                        <div className="modal-body">
                            <div className="p-1">
                                <div className={"col-sm-12"}>
                                    <input type="text"
                                           placeholder="Nombre..."
                                           name="fullName"
                                           value={model.fullName ?? ''}
                                           onChange={onChange}
                                           required={true}
                                           className="form-control input-sm"/>
                                </div>
                                <div className={"col-sm-12"}>
                                    <input type="text"
                                           placeholder="Apellido..."
                                           name="fullSurName"
                                           value={model.fullSurName ?? ''}
                                           onChange={onChange}
                                           required={true}
                                           className="form-control input-sm"/>
                                </div>
                                <div className={"col-sm-12"}>
                                    <input type="email"
                                           placeholder="Email..."
                                           name="email"
                                           value={model.email ?? ''}
                                           onChange={onChange}
                                           required={true}
                                           className="form-control input-sm"/>
                                </div>
                                <div className={"col-sm-12"}>
                                    <input type="tel"
                                           placeholder="Teléfono..."
                                           name="cellphone"
                                           value={model.cellphone ?? ''}
                                           onChange={onChange}
                                           required={true}
                                           className="form-control input-sm"/>
                                </div>
                                <div className={"col-sm-12"}>
                                    <input type="tel"
                                           placeholder="Identificación..."
                                           name="identification"
                                           value={model.identification ?? ''}
                                           onChange={onChange}
                                           required={true}
                                           className="form-control input-sm"/>
                                </div>
                                <div className={"col-sm-12"}>
                                    <select name={"identificationType"}
                                            onChange={onChange}
                                            required={true}
                                            defaultValue={""}
                                            className={"form-select"}>
                                        <option value={""}>Seleccione...</option>
                                        <option value={"CC"}>Cédula de ciudadanía</option>
                                        <option value={"CE"}>Cédula de extranjería</option>
                                        <option value={"NI"}>NIT</option>
                                    </select>
                                </div>
                                <div className={"col-sm-12 mt-3"}>
                                    <label>Total a pagar: <b>$144.000</b></label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={() => modalManager.hideModal('checkout')}>Cerrar
                            </button>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="modal fade" id="success" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Información de la transacción</h5>
                        <button type="button"
                                className="close btn"
                                onClick={() => modalManager.hideModal('success')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>En breve será redirigido para realizar pago...</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => modalManager.hideModal('success')}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
