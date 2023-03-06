import {Route, Routes} from "react-router-dom";
import HomeView from "./presentation/views/home/HomeView";
import Layout from "./components/layout/Layout";
import AboutUsView from "./presentation/views/about-us/AboutUsView";
import ProductsView from "./presentation/views/ProductsView";
import ContactView from "./presentation/views/contact/ContactView";
import DetailView from "./presentation/views/detail/DetailView";
import LoadingProvider from "./application/providers/LoadingProvider";
import Loading from "./components/loading/Loading";
import InfoPayment from "./presentation/views/info-payment/InfoPayment";

export default function () {
    return (
        <LoadingProvider>
            <Layout>
                <Loading/>
                <Routes>
                    <Route path={'/'} element={<HomeView/>}/>
                    <Route path={'/about-us'} element={<AboutUsView/>}/>
                    <Route path={'/products'} element={<ProductsView/>}/>
                    <Route path={'/contact'} element={<ContactView/>}/>
                    <Route path={'/detail'} element={<DetailView/>}/>
                    <Route path={'/info-payment/:paymentId'} element={<InfoPayment/>}/>
                </Routes>
            </Layout>
        </LoadingProvider>
    )
}
