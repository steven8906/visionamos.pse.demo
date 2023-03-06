import {Link} from "react-router-dom";

export default function () {
    return (<>
        <div className="page-nav no-margin row">
            <div className="container mt-5">
                <div className="row mt-5">
                    <h2 className="text-start">Sobre Nosotros</h2>
                    <ul>
                        <li><Link to={"/"}><i className="bi bi-house-door"></i> Home</Link></li>
                        <li><Link to={"/products"}><i className="bi bi-chevron-double-right pe-2"></i> Productos</Link></li>
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
                                <img src="src/assets/img/products/p1.png" alt=""/>
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
                                <img src="src/assets/img/products/p2.png" alt=""/>
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
                                <img src="src/assets/img/products/p3.png" alt=""/>
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
                                <img src="src/assets/img/products/p4.png" alt=""/>
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
                                <img src="src/assets/img/products/p5.png" alt=""/>
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
                                <img src="src/assets/img/products/p6.png" alt=""/>
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
                                <img src="src/assets/img/products/p1.png" alt=""/>
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
                                <img src="src/assets/img/products/p2.png" alt=""/>
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
