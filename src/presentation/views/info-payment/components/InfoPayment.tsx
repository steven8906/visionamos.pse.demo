import h3 from "../../../../assets/img/h3.png";
import p2 from "../../../../assets/img/products/p2.png";
import React, {ReactNode} from "react";

export default function ({children, isLoading}: { children: ReactNode, isLoading:boolean }) {

    return (
        <div className="about-us big-padding">
            <div className="container-lg">
                <div className="about-row row justify-content-between">
                    <div className="col-md-7">
                        <div className="abut-detail fs-6">
                            {children}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={isLoading ? h3 : p2} className={"d-block m-auto"} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
