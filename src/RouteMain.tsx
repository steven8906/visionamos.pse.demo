import {Route, HashRouter, Routes} from "react-router-dom";
import HomeView from "./presentation/views/home/HomeView";
import AboutUsView from "./presentation/views/about-us/AboutUsView";
import ProductsView from "./presentation/views/product/ProductsView";
import ContactView from "./presentation/views/contact/ContactView";
import DetailView from "./presentation/views/detail/DetailView";
import InfoPayment from "./presentation/views/info-payment/InfoPayment";
import utils from "./application/helpers/utils";
import Layout from "./components/layout/Layout";
import Loading from "./components/loading/Loading";
import LoadingProvider from "./application/providers/LoadingProvider";

export default function () {
    return (
        <>
            <HashRouter>
                <LoadingProvider>
                    <Layout>
                        <Loading/>
                        <Routes>
                            <Route path={utils.resolveURL('')} element={<HomeView/>}/>
                            <Route path={utils.resolveURL('/info-payment/:paymentId')} element={<InfoPayment/>}/>
                            <Route path={utils.resolveURL('about-us')} element={<AboutUsView/>}/>
                            <Route path={utils.resolveURL('products')} element={<ProductsView/>}/>
                            <Route path={utils.resolveURL('contact')} element={<ContactView/>}/>
                            <Route path={utils.resolveURL('detail')} element={<DetailView/>}/>
                        </Routes>
                    </Layout>
                </LoadingProvider>
            </HashRouter>
        </>
    )
}
