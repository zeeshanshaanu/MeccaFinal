/* eslint-disable react/jsx-pascal-case */
///////////===========/////////CUSTOM ROUTING///////////===============
import "../Components/FontawsomeIcons";
//
import Login from "../Pages/Login_Section/Login";
import Logout from "../Pages/Login_Section/Logout";
import OtpVerification from "../Pages/Login_Section/OtpVerification";
import ResetPassword from "../Pages/Login_Section/ResetPassword";
import ForgetPassword from "../Pages/Login_Section/ForgetPassword";
import SplashScreen from "../Pages/SlpashScreen/SplashScreen";
//
import Dashboard from "../Pages/Dashboard/Dashboard";
//
import AllUsers from "../Pages/User_Section/AllUsers";
import AddUser from "../Pages/User_Section/AddUser";
import EditUser from "../Pages/User_Section/EditUser";
import UserDetail from "../Pages/User_Section/UserDetail";
//
// import AllProfessionals from "../Pages/Professionals_Section/AllProfessionals";
import EditProfessionals from "../Pages/Professionals_Section/EditProfessionals";
import AddProfessionals from "../Pages/Professionals_Section/AddProfessionals";
import ProfessionalsDetail from "../Pages/Professionals_Section/ProfessionalsDetail";
//
import AllItems from "../Pages/Mecca_Market_section/AllItems";
import EditProductDetails from "../Pages/Mecca_Market_section/EditProductDetails";
import EditShopDetails from "../Pages/Mecca_Market_section/EditShopDetails";
import AllShopsgridView from "../Pages/Mecca_Market_section/AllShopsgridView";
import ShopDetail from "../Pages/Mecca_Market_section/ShopDetail";
//
import AddKalique from "../Pages/Kliques_Section/AddKalique";
import AllKliques from "../Pages/Kliques_Section/AllKliques";
import KliquesDetail from "../Pages/Kliques_Section/KliquesDetail";
import UpdateKlique from "../Pages/Kliques_Section/UpdateKlique";
//
import AddNewEvent from "../Pages/Events_Section/AddNewEvent";
import All_Events from "../Pages/Events_Section/All_Events";
import EventDetail from "../Pages/Events_Section/EventDetail";
import AttendeesDetails from "../Pages/Events_Section/AttendeesDetails";

//
import AddNewBlog from "../Pages/Blog_Section/AddNewBlog";
import AllBlogs from "../Pages/Blog_Section/AllBlogs";
import UpdateBlog from "../Pages/Blog_Section/UpdateBlog";
//
import All_Orders from "../Pages/Order_Section/All_order";
import OrderDetail from "../Pages/Order_Section/OrderDetail";
//
import Setting from "../Pages/Setting/Setting";
//
import { onMessageListener } from "../firebaseInit";
//
import Toastnotify from "../Components/Notifications/toast";
import Notifications from "../Components/Notifications/Notifications";
//
import PageNotFound from "../Pages/NotFoundPage/PageNotFound";
import EmailVerifySuccessful from "../Pages/EmailStatus/EmailVerifySuccessful";
import LinkExpire from "../Pages/EmailStatus/LinkExpire";
//
import ViewBlog from "../Pages/Blog_Section/ViewBlog";
import MapRealEstate from "../Components/Map/MeccaFitMap";
//
import UpdateService from "../Pages/Services_Management/UpdateService";
import UserProvider from "../Contexts/User";
//
// import PrivateRoute from "../Components/PrivateRoute";
///////////===========/////////CUSTOM ROUTING end ///////////===============
///////////===========/////////IMPORT AND LIBRARIES ROUTING  ///////////===============
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tags from "../Pages/ServicesAndCatgeory/Tags/Tags";
import AllShopCategories from "../Pages/ServicesAndCatgeory/Shop Categories/AllShopCategories";
import Varients from "../Pages/ServicesAndCatgeory/Varients/Varients";
import AllProductCategories from "../Pages/ServicesAndCatgeory/Shop Product Categories/AllProductCategories";
import UpdateShopCategory from "../Pages/ServicesAndCatgeory/Shop Categories/UpdateShopCategory";
import Blogs from "../Pages/ServicesAndCatgeory/Blogs Categories/Blogs";
import UpdateBlogCategory from "../Pages/ServicesAndCatgeory/Blogs Categories/UpdateBlogCategory";
import AllEventCategories from "../Pages/ServicesAndCatgeory/Event Catgories/AllEventCategories";
import UpdateEventCategory from "../Pages/ServicesAndCatgeory/Event Catgories/UpdateEventCategory";
import AppSetings from "../Pages/Services_Management/AppSetings";
import Testing from "../Testing/Testing";
import UpdateVarient from "../Pages/ServicesAndCatgeory/Varients/UpdateVarient";
import AllFaqs from "../Pages/ServicesAndCatgeory/FAQs Categories/AllFaqs";
import UpdateQuoraFaqCategory from "../Pages/ServicesAndCatgeory/FAQs Categories/UpdateQuoraFaqCategory";
import Viewitem from "../Pages/Mecca_Market_section/Viewitem";
import AllShops from "../Pages/Mecca_Market_section/AllShopes";
import Community from "../Pages/CommunitySection/Community";
import CommunityDetail from "../Pages/CommunitySection/CommunityDetail";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./configs/i18n/i18n";
const LazyAllProfessionals = React.lazy(() =>
  import("../Pages/Professionals_Section/AllProfessionals")
);
///////////===========/////////IMPORT AND LIBRARIES ROUTING END  ///////////===============

const Routing = () => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      setShow(true);
    })
    .catch((err) => console.log("failed: ", err));
  return (
    <div className="App">
      <div className="">
        {" "}
        {show ? (
          <Toastnotify title={notification.title} body={notification.body} />
        ) : null}{" "}
        <Notifications />
      </div>{" "}
      <BrowserRouter>
        <Routes>
          {" "}
          {/* ================----------LOGIN SECTION---------=======-- */}{" "}
          <Route exact path="/" element={<SplashScreen />} />{" "}
          <Route path="/Login" element={<Login />} />{" "}
          <Route
            exact
            path="/ForgetPassword"
            element={<ForgetPassword />}
          ></Route>{" "}
          <Route
            exact
            path="/OtpVerification/:email"
            element={<OtpVerification />}
          ></Route>{" "}
          <Route
            exact
            path="/ResetPassword/:email"
            element={<ResetPassword />}
          ></Route>{" "}
          <Route path="/Logout" element={<Logout />}>
            {" "}
          </Route>{" "}
          {/* ============Dashboard_Section========== */}{" "}
          <Route exact path="/Dashboard" element={<Dashboard />}>
            {" "}
          </Route>{" "}
          {/* <Route
                        exact
                        path="/Dashboard"
                        element={
                          <PrivateRoute>
                            <Dashboard />
                          </PrivateRoute>
                        }
                      /> */}{" "}
          {/* ============Users_Section========== */}{" "}
          <Route exact path="/AllUsers" element={<AllUsers />}>
            {" "}
          </Route>{" "}
          <Route exact path="/AddUser" element={<AddUser />}>
            {" "}
          </Route>{" "}
          <Route exact path="/EditUser" element={<EditUser />}>
            {" "}
          </Route>{" "}
          <Route exact path="/UserDetail/:id" element={<UserDetail />}>
            {" "}
          </Route>{" "}
          {/* ============Professionals_Section========== */} {/*  */}{" "}
          <Route
            path="/AllProfessionals"
            element={
              <React.Suspense fallback="">
                <LazyAllProfessionals />
              </React.Suspense>
            }
          ></Route>{" "}
          <Route
            path="/EditProfessionals"
            element={<EditProfessionals />}
          ></Route>{" "}
          <Route
            path="/AddProfessionals"
            element={<AddProfessionals />}
          ></Route>{" "}
          <Route
            path="/ProfessionalsDetail/:id"
            element={<ProfessionalsDetail />}
          ></Route>{" "}
          {/* ============Mecca_Market========== */}{" "}
          <Route path="/AllShops" element={<AllShops />}>
            {" "}
          </Route>{" "}
          <Route path="/AllItems" element={<AllItems />}></Route>{" "}
          <Route path="/Viewitem/:id" element={<Viewitem />}></Route>{" "}
          <Route path="/ShopDetail/:id" element={<ShopDetail />}>
            {" "}
          </Route>{" "}
          <Route
            path="/AllShopsgridView"
            element={<AllShopsgridView />}
          ></Route>{" "}
          <Route
            path="/EditProductDetails"
            element={<EditProductDetails />}
          ></Route>{" "}
          <Route path="/EditShopDetails" element={<EditShopDetails />}></Route>{" "}
          {/* ============Kliques_Section========== */}{" "}
          <Route path="/AllKliques" element={<AllKliques />}>
            {" "}
          </Route>{" "}
          <Route path="/KliquesDetail" element={<KliquesDetail />}>
            {" "}
          </Route>{" "}
          <Route path="/AddKalique" element={<AddKalique />}>
            {" "}
          </Route>{" "}
          <Route path="/UpdateKlique" element={<UpdateKlique />}>
            {" "}
          </Route>{" "}
          {/* ============Services_Section========== */}{" "}
          <Route path="/AppSetings" element={<AppSetings />}>
            {" "}
          </Route>{" "}
          <Route
            path="/UpdateService/:service_id"
            element={<UpdateService />}
          ></Route>{" "}
          {/* ============Events_Section========== */}{" "}
          <Route path="/All_Events" element={<All_Events />}>
            {" "}
          </Route>{" "}
          <Route path="/AddNewEvent" element={<AddNewEvent />}>
            {" "}
          </Route>{" "}
          <Route path="/EventDetail/:id" element={<EventDetail />}>
            {" "}
          </Route>{" "}
          <Route path="/AttendeesDetails/:id" element={<AttendeesDetails />}>
            {" "}
          </Route>{" "}
          {/* ============Blog_Section========== */}{" "}
          <Route path="/AllBlogs" element={<AllBlogs />}>
            {" "}
          </Route>{" "}
          <Route path="/AddNewBlog" element={<AddNewBlog />}>
            {" "}
          </Route>{" "}
          <Route path="/UpdateBlog/:id" element={<UpdateBlog />}>
            {" "}
          </Route>{" "}
          <Route path="/ViewBlog/:id" element={<ViewBlog />}>
            {" "}
          </Route>{" "}
          {/* ============Orders_Section========== */}{" "}
          <Route path="/All_Orders" element={<All_Orders />}>
            {" "}
          </Route>{" "}
          <Route path="/OrderDetail/:id" element={<OrderDetail />}>
            {" "}
          </Route>{" "}
          {/* ============SETTING========== */}{" "}
          <Route path="/Setting" element={<Setting />}>
            {" "}
          </Route>{" "}
          {/* ============EmailVerifySuccessful========== */}{" "}
          <Route
            path="/EmailVerifySuccessful"
            element={<EmailVerifySuccessful />}
          ></Route>{" "}
          <Route path="/LinkExpire" element={<LinkExpire />}>
            {" "}
          </Route>{" "}
          {/* ============Categories and services========== */}{" "}
          <Route path="/Varients" element={<Varients />}>
            {" "}
          </Route>{" "}
          <Route path="/UpdateVarient/:id" element={<UpdateVarient />}>
            {" "}
          </Route>{" "}
          <Route path="/Tags" element={<Tags />}>
            {" "}
          </Route>{" "}
          <Route path="/Testing" element={<Testing />}>
            {" "}
          </Route>{" "}
          <Route
            path="/UpdateShopCategory/:id"
            element={<UpdateShopCategory />}
          ></Route>{" "}
          <Route
            path="/AllProductCategories"
            element={<AllProductCategories />}
          ></Route>{" "}
          <Route
            path="/AllShopCategories"
            element={<AllShopCategories />}
          ></Route>{" "}
          <Route path="/Blogs" element={<Blogs />}>
            {" "}
          </Route>{" "}
          <Route
            path="/UpdateBlogCategory/:id"
            element={<UpdateBlogCategory />}
          ></Route>{" "}
          <Route path="/AllFaqs" element={<AllFaqs />}></Route>{" "}
          <Route
            path="/AllEventCategories"
            element={<AllEventCategories />}
          ></Route>{" "}
          <Route
            path="/UpdateQuoraFaqCategory/:id"
            element={<UpdateQuoraFaqCategory />}
          ></Route>{" "}
          <Route
            path="/UpdateEventCategory/:id"
            element={<UpdateEventCategory />}
          ></Route>{" "}
          {/* ============Categories and services========== */}{" "}
          {/* ============Community========== */}{" "}
          <Route path="/Community" element={<Community />}></Route>{" "}
          <Route
            path="/CommunityDetail/:id"
            element={<CommunityDetail />}
          ></Route>{" "}
          {/* ============Community========== */}{" "}
          {/* ============PageNotFound========== */}{" "}
          <Route path="*" element={<PageNotFound />}>
            {" "}
          </Route>{" "}
          <Route path="/MeccaFitMap" element={<MapRealEstate />}>
            {" "}
          </Route>{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <Routing />
    </UserProvider>
  );
}

export default Routing;
