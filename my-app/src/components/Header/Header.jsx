import { NavLink, useNavigate } from "react-router-dom";
import { SignInModal } from "./SignInModal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "react-bootstrap";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export const Header = () => {
   const [show, setShow] = useState(false);
   const navigate = useNavigate();

   const toggleShow = () => {
      setShow(!show);
      if (show) {
         navigate("/");
      }
   };

   const logout = async () => {
      try {
         await signOut(auth);
      } catch (err) {
         console.error(err);
      }
   };
   const successfullSubmission = () => {
      toast.success("You successfully signed!", {
         duration: 1000,
      });
      setTimeout(() => {
         setShow(!show);
      }, 1000);
   };

   return (
      <div>
         <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
               <h1 className="text-primary m-0">
                  <i className="fa fa-utensils me-3" />
                  Healthy Cook
               </h1>
               {/* <img src="img/logo.png" alt="Logo"> */}
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
               >
                  <span className="fa fa-bars" />
               </button>
               <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto py-0 pe-4">
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           isActive
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                        }
                     >
                        Home
                     </NavLink>
                     <NavLink
                        to="/about"
                        className={({ isActive }) =>
                           isActive
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                        }
                     >
                        About
                     </NavLink>
                     <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                           isActive
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                        }
                     >
                        Menu
                     </NavLink>
                     <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                           isActive
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                        }
                     >
                        Contact
                     </NavLink>
                     <NavLink
                        to="/login"
                        onClick={toggleShow}
                        className={({ isActive }) =>
                           isActive
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                        }
                     >
                        Sign in
                     </NavLink>
                     <NavLink
                        to="/logout"
                        onClick={logout}
                        className={({ isActive }) =>
                           isActive
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                        }
                     >
                        Sign out
                     </NavLink>
                  </div>
                  <a href className="btn btn-primary py-2 px-4">
                     Order meal
                  </a>
               </div>
            </nav>
         </div>
         <div className="container-fluid py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
               <div className="row align-items-center g-5">
                  <div className="col-lg-6 text-center text-lg-start">
                     <h1 className="display-3 text-white animated slideInLeft">
                        Start Your
                        <br />
                        Healthy Lifestyle
                     </h1>
                     <p className="text-white animated slideInLeft mb-4 pb-2">
                        Start your journey to a healthier lifestyle with our
                        fresh and healthy menus, with top quality products and
                        easy to make meals!
                     </p>
                     <a
                        href="#"
                        className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                     >
                        Order meal
                     </a>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                     <img
                        className="img-fluid"
                        src="/assets/img/main-dish.png"
                        alt="Logo with rotating plate with food"
                     />
                  </div>
               </div>
            </div>
         </div>
         <SignInModal
            show={show}
            toggleShow={toggleShow}
            successfullSubmission={successfullSubmission}
         />
      </div>
   );
};
