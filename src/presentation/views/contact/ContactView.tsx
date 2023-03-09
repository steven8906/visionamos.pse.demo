import {Link} from "react-router-dom";
import utils from "../../../application/helpers/utils";

export default function () {
    return (<>
            <div className="page-nav no-margin row">
                <div className="container mt-5">
                    <div className="row">
                        <h2 className="text-start">Sobre Nosotros</h2>
                        <ul>
                            <li><Link to={utils.resolveURL("")}><i className="bi bi-house-door"></i> Home</Link></li>
                            <li><Link to={utils.resolveURL("contact")}><i className="bi bi-chevron-double-right pe-2"></i> Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row no-margin">
                <iframe className="border-0 w-100"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
                        height="450" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="row contact-rooo big-padding no-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 p-5">
                            <h2 className="fs-4 fw-bold">Contact Form</h2> <br/>
                            <div className="row cont-row">
                                <div className="col-sm-3"><label>Enter Name </label><span>:</span></div>
                                <div className="col-sm-8"><input type="text" placeholder="Enter Name" name="name"
                                                                 className="form-control input-sm"/></div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3"><label>Email Address </label><span>:</span></div>
                                <div className="col-sm-8"><input type="text" name="name"
                                                                 placeholder="Enter Email Address"
                                                                 className="form-control input-sm"/></div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3"><label>Mobile Number</label><span>:</span></div>
                                <div className="col-sm-8"><input type="text" name="name"
                                                                 placeholder="Enter Mobile Number"
                                                                 className="form-control input-sm"/></div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3"><label>Enter Message</label><span>:</span></div>
                                <div className="col-sm-8">
                              <textarea rows={5} placeholder="Enter Your Message"
                                        className="form-control input-sm"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-3 p-2"><label></label></div>
                                <div className="col-sm-8">
                                    <button className="btn btn-primary fs-5 btn-sm">Send Message</button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="col-sm-5">
                            <div className="serv ">
                                <h2 className="fs-4 fw-bold mt-5">Address</h2>
                                <p className="fs-5">
                                    Smart Computers <br/>
                                    Daman Street<br/>
                                    K.K District<br/>
                                    Phone:+91 9878787878<br/>
                                    Email:info@smart-eye.in<br/>
                                    Website:www.smart-eye.com<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
