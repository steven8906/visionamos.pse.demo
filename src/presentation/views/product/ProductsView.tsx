import {Link} from "react-router-dom";
import p1 from "../../../assets/img/products/p1.png";
import p2 from "../../../assets/img/products/p2.png";
import p3 from "../../../assets/img/products/p3.png";
import p4 from "../../../assets/img/products/p4.png";
import p5 from "../../../assets/img/products/p5.png";
import p6 from "../../../assets/img/products/p6.png";
import utils from "../../../application/helpers/utils";

export default function () {
    return (<>
        <div className="page-nav no-margin row">
            <div className="container mt-5">
                <div className="row mt-5">
                    <h2 className="text-start">Sobre Nosotros</h2>
                    <ul>
                        <li><Link to={utils.resolveURL("")}><i className="bi bi-house-door"></i> Home</Link></li>
                        <li><Link to={utils.resolveURL("products")}><i className="bi bi-chevron-double-right pe-2"></i> Productos</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container-fluid products big-padding px-3 bg-honey">
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p1} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Manuka Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p2} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Raw Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p3} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Wild Flower Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p4} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Queen Bee Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p5} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Manuka Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p6} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Queen Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p1} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Natural Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <a href="detail.html">
                            <div className="product bg-white p-4 text-center shadow-md">
                                <img src={p2} alt=""/>
                                <div className="d-inline-block">
                                    <h4 className="fw-bolder fs-5 mt-4">Organic Honey</h4>
                                    <span className="fw-bolder fs-4">85$</span> <span
                                    className="text-muted text-decoration-line-through">105$</span>
                                </div>
                                <div className="d-inline-block mt-3">
                                    <button className="btn btn-primary px-5">Buy Now</button>
                                </div>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
