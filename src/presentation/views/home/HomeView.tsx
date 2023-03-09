import {Link, useNavigate} from "react-router-dom";
import s1 from "../../../assets/img/slider/s1.jpg";
import h2 from "../../../assets/img/h2.png";
import s2 from "../../../assets/img/slider/s2.jpg";
import h3 from "../../../assets/img/h3.png";
import b1 from "../../../assets/img/blog/b1.jpg";
import b2 from "../../../assets/img/blog/b2.jpg";
import b4 from "../../../assets/img/blog/b4.jpg";
import honeycomb from "../../../assets/img/icon/honeycomb.png";
import bee from "../../../assets/img/icon/bee.png";
import honey from "../../../assets/img/icon/honey.png";
import fast from "../../../assets/img/icon/fast.png";
import p1 from "../../../assets/img/products/p1.png";
import p2 from "../../../assets/img/products/p2.png";
import p3 from "../../../assets/img/products/p3.png";
import p4 from "../../../assets/img/products/p4.png";
import member1 from "../../../assets/img/testimonial/member-01.jpg";
import member3 from "../../../assets/img/testimonial/member-03.jpg";
import member2 from "../../../assets/img/testimonial/member-02.jpg";
import utils from "../../../application/helpers/utils";

export default function () {

    const navigate = useNavigate();

    return (<>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={s1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption   d-md-block">
                        <div className="row">
                            <div className="col-lg-6 text-start ">
                                <h1 className="fs-12 fw-bolder text-start ">Mieles de Antioquia <br/><span
                                    className="text-primary">Miel Natural Campesina</span></h1>
                                <p className="d-none d-md-block text-dark text-start">Hay muchas variedades diferentes
                                    de miel de
                                    flores disponibles…</p>
                                <div className="d-inline-block pt-5 text-start d-none d-lg-block">
                                    <Link to={"detail"}>
                                        <span className={"btn btn-primary shadow fs-5 fw-bolder px-5 py-2"}>Comprar aquí</span>
                                    </Link>
                                    <Link to={"detail"}>
                                        <span className={"btn btn-outline-primary ms-4 shadow fs-5 fw-bolder px-5 py-2"}>Comprar</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <img className="w-100" src={h2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={s2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption  d-md-block">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="fs-12 fw-bolder text-start">Miel Orgánica <br/><span
                                    className="text-primary">online shop</span></h1>
                                <p className="d-none d-md-block text-dark text-start">Hay muchas variedades diferentes
                                    de miel de
                                    flores disponibles…</p>
                                <div className="d-inline-block pt-5 text-start d-none d-lg-block">
                                    <button className="btn btn-primary shadow fs-5 fw-bolder px-5 py-2"
                                            onClick={()=> navigate(utils.resolveURL('detail'))}>Comprar aquí
                                    </button>
                                    <button
                                        className="btn btn-outline-primary ms-4 shadow fs-5 fw-bolder px-5 py-2">Comprar
                                        aquí
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <img className="w-100" src={h3} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><i
                className="bi fs-4 text-dark bi-chevron-left"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"><i
                className="bi fs-4 text-dark bi-chevron-right"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>

        <div id="blog" className="service container-fluid px-4 bg-white py-5">
            <div className="container">
                <div className="section-title row mb-3">
                    <h2 className="fw-bolder">Nuestros Clientes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="serv-cove rounded bg-white p-2">
                            <img src={b1} alt=""/>
                            <div className="p-2">
                                <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in Webdesign sit nibh amet Mauris ipsum sit
                                    nibh</h5>
                                <span className="fs-8">22 May 2015</span>
                                <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="serv-cove rounded bg-white p-2">
                            <img src={b2} alt=""/>
                            <div className="p-2">
                                <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in Webdesign sit nibh amet Mauris ipsum sit
                                    nibh</h5>
                                <span className="fs-8">22 May 2015</span>
                                <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="serv-cove rounded bg-white p-2">
                            <img src={b4} alt=""/>
                            <div className="p-2">
                                <h5 className="mt-3 fs-7 fw-bold">Top 10 Trends in Webdesign sit nibh amet Mauris ipsum sit
                                    nibh</h5>
                                <span className="fs-8">22 May 2015</span>
                                <span className="float-end fs-8"><i className="bi bi-person"></i> Sam Anderson</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid products big-padding pt-3">
            <div className="container-xl">
                <div className="section-title row">
                    <h2 className="fs-1 fw-bold">Por qué elegir nuestra miel</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ipsum
                        dolor
                        sit amet, consectetuer adipiscing elit consectetuer adipiscing elit. Aenean commodo.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 mb-4 col-md-6">
                        <div className="cover text-center">
                            <img className="w-125" src={honeycomb} alt=""/>
                            <h2 className="fs-3 fw-bolder mt-4">Miel Orgánica</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis
                                malesuada. Sed
                                suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 col-md-6">
                        <div className="cover text-center">
                            <img className="w-125" src={bee} alt=""/>
                            <h2 className="fs-3 fw-bolder mt-4">Miel de Abeja Reina</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis
                                malesuada. Sed
                                suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 col-md-6">
                        <div className="cover text-center">
                            <img className="w-125" src={honey} alt=""/>
                            <h2 className="fs-3 fw-bolder mt-4">Embalaje higiénico </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis
                                malesuada. Sed
                                suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 col-md-6">
                        <div className="cover text-center">
                            <img className="w-125" src={fast} alt=""/>
                            <h2 className="fs-3 fw-bolder mt-4">Entrega rápida </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis
                                malesuada. Sed
                                suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid products big-padding px-3 bg-honey">
            <div className="container-xl">
                <div className="section-title row">
                    <h2 className="fs-1 fw-bold">Nuestros productos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ipsum
                        dolor
                        sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="product bg-white p-4 text-center shadow-md">
                            <img src={p1} alt=""/>
                            <div className="d-inline-block">
                                <h4 className="fw-bolder fs-5 mt-4">Miel Manuka</h4>
                                <span className="fw-bolder fs-4">85$</span> <span
                                className="text-muted text-decoration-line-through">105$</span>
                            </div>
                            <div className="d-inline-block mt-3">
                                <button className="btn btn-primary px-5" onClick={()=> navigate(utils.resolveURL("detail"))}>Comprar aquí</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="product bg-white p-4 text-center shadow-md">
                            <img src={p2} alt=""/>
                            <div className="d-inline-block">
                                <h4 className="fw-bolder fs-5 mt-4">Miel cruda</h4>
                                <span className="fw-bolder fs-4">85$</span> <span
                                className="text-muted text-decoration-line-through">105$</span>
                            </div>
                            <div className="d-inline-block mt-3">
                                <button className="btn btn-primary px-5" onClick={()=> navigate(utils.resolveURL("detail"))}>Comprar aquí</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="product bg-white p-4 text-center shadow-md">
                            <img src={p3} alt=""/>
                            <div className="d-inline-block">
                                <h4 className="fw-bolder fs-5 mt-4">Miel de Flores Silvestres</h4>
                                <span className="fw-bolder fs-4">85$</span> <span
                                className="text-muted text-decoration-line-through">105$</span>
                            </div>
                            <div className="d-inline-block mt-3">
                                <button className="btn btn-primary px-5" onClick={()=> navigate(utils.resolveURL("detail"))}>Comprar aquí</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="product bg-white p-4 text-center shadow-md">
                            <img src={p4} alt=""/>
                            <div className="d-inline-block">
                                <h4 className="fw-bolder fs-5 mt-4">Miel de Abeja Reina</h4>
                                <span className="fw-bolder fs-4">85$</span> <span
                                className="text-muted text-decoration-line-through">105$</span>
                            </div>
                            <div className="d-inline-block mt-3">
                                <button className="btn btn-primary px-5" onClick={()=> navigate(utils.resolveURL("detail"))}>Comprar aquí</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-us big-padding">
            <div className="container-lg">
                <div className="section-title">
                    <p>Ayúdanos a lograr nuestra meta</p>
                    <h2>Sobre nuestra compañía</h2>
                </div>
                <div className="about-row row">
                    <div className="col-md-7">
                        <div className="abut-detail fs-6">
                            <p className="mb-3">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien,
                                eget
                                tempor justo. Aenean porttitor nibh metus, Cras faucibus tellus eleifend, fermentum purus in,
                                dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida sollicitudin
                                egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc
                                hendrerit nunc sit </p>
                            <p className="mb-3"> Amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue,
                                at
                                dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus
                                sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo
                                posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus</p>
                            <p className="mb-4">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien,
                                eget
                                tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et . Fusce egestas
                                volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit Cras faucibus tellus
                                eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula
                                vel gravida </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={member1} alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div id="testimonial" className="service bg-honey container-fluid px-4 py-5">
            <div className="container">
                <div className="section-title row mb-3">
                    <h2 className="fw-bolder">Testimonial</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas
                        tellus.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="serv-cove shadow-md rounded bg-white p-3">
                            <div className="prf row mb-3">
                                <div className="col-3">
                                    <img className="rounded-pill" src={h2} alt=""/>
                                </div>
                                <div className="col-9 align-self-center">
                                    <h6 className="mb-0 fw-bolder">Victor Yepes</h6>
                                    <span>CEO Fabric Nation</span>
                                </div>
                            </div>
                            <div className="det text-center">
                                <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus
                                    elit.
                                    Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis
                                    ut
                                    arcu tristique luctus. Curabitur </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="serv-cove shadow-md rounded bg-white p-3">
                            <div className="prf row mb-3">
                                <div className="col-3">
                                    <img className="rounded-pill" src={member3} alt=""/>
                                </div>
                                <div className="col-9 align-self-center">
                                    <h6 className="mb-0 fw-bolder">Mario Ortega</h6>
                                    <span>CEO Notitech</span>
                                </div>
                            </div>
                            <div className="det text-center">
                                <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus
                                    elit.
                                    Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis
                                    ut
                                    arcu tristique luctus. Curabitur </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="serv-cove shadow-md rounded bg-white p-3">
                            <div className="prf row mb-3">
                                <div className="col-3">
                                    <img className="rounded-pill" src={member2} alt=""/>
                                </div>
                                <div className="col-9 align-self-center">
                                    <h6 className="mb-0 fw-bolder">Pedro Hernández</h6>
                                    <span>Admin Vintech</span>
                                </div>
                            </div>
                            <div className="det text-center">
                                <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus
                                    elit.
                                    Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis
                                    ut
                                    arcu tristique luctus. Curabitur </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
