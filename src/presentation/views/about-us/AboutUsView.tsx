import {Link} from "react-router-dom";
import Testimonial from "../../../components/Testimonial";

export default function () {

    return (<>
        <div className="page-nav no-margin row">
            <div className="container mt-5">
                <div className="row">
                    <h2 className="text-start">Sobre Nosotros</h2>
                    <ul>
                        <li><Link to={"/"}><i className="bi bi-house-door"></i> Home</Link></li>
                        <li><Link to={"/about-us"}><i className="bi bi-chevron-double-right pe-2"></i> Sobre nosotros</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="about-us big-padding">
            <div className="container-lg">
                <div className="about-row row">
                    <div className="col-md-7">
                        <div className="abut-detail fs-6">

                            <p className="mb-3">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum
                                sapien,
                                eget tempor justo. Aenean porttitor nibh metus, Cras faucibus tellus eleifend, fermentum
                                purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida
                                sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem
                                bibendum porta. Nunc hendrerit nunc sit </p>
                            <p className="mb-3"> Amet tellus posuere, at malesuada sem gravida. Integer maximus
                                ultricies
                                augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum
                                purus
                                in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida
                                vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin
                                sem. Duis tempus</p>
                            <p className="mb-4">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum
                                sapien,
                                eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et .
                                Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit
                                Cras
                                faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus.
                                Etiam iaculis, ligula vel gravida </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="src/assets/img/h2.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <Testimonial/>
    </>)
}
