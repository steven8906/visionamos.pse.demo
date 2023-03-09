import {Link} from "react-router-dom";
import {ReactNode} from "react";
import logo from '../../assets/img/logo.png';
import b4 from '../../assets/img/blog/b4.jpg';
import b3 from '../../assets/img/blog/b3.jpg';
import b2 from '../../assets/img/blog/b2.jpg';
import utils from "../../application/helpers/utils";

type Props = {
    children: ReactNode
}

export default function ({children}: Props) {
    return <>
        <header>
            <div id="menu-jk" className="nav-part shadow-md bg-white navcol fixed-top">
                <div className="container-lg">
                    <div className="row  p-2">
                        <div className="col-lg-4 p-2">
                            <img className="max-230" src={logo} alt=""/>
                            <a data-bs-toggle="collapse" data-bs-target="#menu"
                               className="float-end d-lg-none pt-1 ps-3"><i className="bi pt-1 fs-1 cp bi-list"></i></a>
                        </div>
                        <div id="menu" className="col-lg-8 d-none d-lg-block">
                            <ul className="fw-bold float-end nacul fs-7">
                                <li className="float-start p-3 px-4"><Link to={utils.resolveURL("")}>Home</Link> </li>
                                <li className="float-start p-3 px-4"> <Link to={utils.resolveURL("about-us")}>Sobre nosotros</Link> </li>
                                <li className="float-start p-3 px-4"> <Link to={utils.resolveURL("products")}>Productos</Link> </li>
                                <li className="float-start p-3 px-4"> <Link to={utils.resolveURL("contact")}>Contactenos</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {children}
        <footer>
            <div className="inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 foot-about">
                            <h4>Sobre nosotros</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit libero
                                pellentesque
                                libero interdum, id mattis felis dictum. Praesent eget lacus tempor justo efficitur
                                malesuada.
                                Cras ut suscipit nisi.</p>

                            <ul>
                                <li>23 Rose Stren Melbourn</li>
                                <li>sales@smarteyeapps.com</li>
                                <li>+91 876 766 554</li>
                            </ul>
                        </div>

                        <div className="col-md-3 foot-post">
                            <h4>Últimos Posts</h4>

                            <div className="post-row">
                                <div className="image">
                                    <img src={b4} alt=""/>
                                </div>
                                <div className="detail">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                                </div>
                            </div>

                            <div className="post-row">
                                <div className="image">
                                    <img src={b3} alt=""/>
                                </div>
                                <div className="detail">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                                </div>
                            </div>

                            <div className="post-row">
                                <div className="image">
                                    <img src={b2} alt=""/>
                                </div>
                                <div className="detail">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 foot-services">
                            <h4>Top Categorías</h4>

                            <ul>
                                <li><a href="">Target Statergy</a></li>
                                <li><a href="">Web Analytics</a></li>
                                <li><a href="">Page Monitering</a></li>
                                <li><a href="">Page Optimization</a></li>
                                <li><a href="">Target Statergy</a></li>
                                <li><a href="">Email Marketing</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 foot-news">
                            <h4>News Letter</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, vehicula
                                eget
                                eros. </p>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control mb-0" placeholder="Recipient's username"
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                            <span className="input-group-text bg-primary" id="basic-addon2"><i
                                className="bi text-white bi-send"></i></span>
                                </div>
                            </div>

                            <ul>
                                <li><i className="bi bi-facebook"></i></li>
                                <li><i className="bi bi-twitter"></i></li>
                                <li><i className="bi bi-instagram"></i></li>
                                <li><i className="bi bi-linkedin"></i></li>
                                <li><i className="bi bi-pinterest"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copy">
            <div className="container">
                <a href="https://www.smarteyeapps.com/">2022 &copy; Todos los derechos reservados - Visionamos</a>

                <span>
                <a href=""><i className="fab fa-github"></i></a>
                <a href=""><i className="fab fa-google-plus-g"></i></a>
                <a href="https://in.pinterest.com/prabnr/pins/"><i className="fab fa-pinterest-p"></i></a>
                <a href="https://twitter.com/prabinraja89"><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/freewebtemplatesbysmarteye"><i className="fab fa-facebook-f"></i></a>
            </span>
            </div>
        </div>
    </>
}
