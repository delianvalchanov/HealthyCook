import {
   Button,
   Container,
   Form,
   FormLabel,
   InputGroup,
   Modal,
   ButtonGroup,
   Tab,
   Tabs,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import HeaderCSS from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
   auth,
   googleAuthProvider,
   facebookAuthProvider,
   twitterAuthProvider,
} from "../../config/firebase";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignInModal = ({ show, toggleShow, successfullSubmission }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const onRegisterSubmit = async () => {
      try {
         await createUserWithEmailAndPassword(auth, email, password);
         navigate("/");
      } catch (err) {
         console.error(err);
      }
   };

   const onLoginSubmit = async (e) => {
      e.preventDefault();
      try {
         await signInWithEmailAndPassword(auth, email, password);
         navigate("/");
      } catch (err) {
         console.error(err);
      }
   };

   const signInWithGoogle = async () => {
      try {
         await signInWithPopup(auth, googleAuthProvider);
      } catch (err) {
         console.error(err);
      }
   };
   const signInWithFacebook = async () => {
      try {
         await signInWithPopup(auth, facebookAuthProvider);
      } catch (err) {
         console.error(err);
      }
   };
   const signInWithTwitter = async () => {
      try {
         await signInWithPopup(auth, twitterAuthProvider);
      } catch (err) {
         console.error(err);
      }
   };
   return (
      <Modal
         className={`modal-dialog-centered ${HeaderCSS.wrapper}`}
         show={show}
         onHide={toggleShow}
      >
         <Modal.Body>
            <Tabs
               className="mb-3 nav-fill"
               id="uncontrolled-tab-example"
               defaultActiveKey="signIn"
            >
               <Tab className={HeaderCSS.tab} eventKey="signIn" title="Sign in">
                  <Form
                     method="POST"
                     onSubmit={onLoginSubmit}
                     autoComplete="on"
                     id={HeaderCSS["login"]}
                  >
                     <Container className="container">
                        <p className={HeaderCSS.optionsDesc}>
                           with your social network
                        </p>
                        <ButtonGroup className={HeaderCSS.socialButtons}>
                           <Button
                              onClick={signInWithFacebook}
                              className={HeaderCSS.social}
                              id={HeaderCSS["facebook"]}
                           >
                              {" "}
                              <FontAwesomeIcon
                                 className={`fa-3x ${HeaderCSS.facebookIcon}`}
                                 icon={faFacebook}
                              />{" "}
                           </Button>
                           <Button
                              onClick={signInWithGoogle}
                              className={HeaderCSS.social}
                              id={HeaderCSS["google"]}
                           >
                              {" "}
                              <FontAwesomeIcon
                                 className={`fa-3x ${HeaderCSS.googleIcon}`}
                                 icon={faGoogle}
                              />{" "}
                           </Button>
                           <Button
                              onClick={signInWithTwitter}
                              className={HeaderCSS.social}
                              id={HeaderCSS["twitter"]}
                           >
                              {" "}
                              <FontAwesomeIcon
                                 className={`fa-3x ${HeaderCSS.twitterIcon}`}
                                 icon={faTwitter}
                              />{" "}
                           </Button>
                        </ButtonGroup>
                        <p className={HeaderCSS.optionsDesc}>or</p>
                        <InputGroup className="mb-2">
                           <FormLabel htmlFor="email">Email: </FormLabel>
                           <input
                              className={HeaderCSS.authField}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="peter@gmail.com"
                           />
                        </InputGroup>
                        <InputGroup className="mb-1">
                           <FormLabel htmlFor="login-pass">
                              Password:{" "}
                           </FormLabel>
                           <input
                              className={HeaderCSS.authField}
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              type="password"
                              name="password"
                              id="password"
                           />
                        </InputGroup>
                        <Button
                           type="submit"
                           className={`w-100 mb-2 ${HeaderCSS.submit}`}
                        >
                           Login
                        </Button>
                        <p>
                           <span>
                              If you don't have profile, click{" "}
                              <a href="#">here</a>
                           </span>
                        </p>
                     </Container>
                  </Form>
               </Tab>
               <Tab className={HeaderCSS.tab} eventKey="signUp" title="Sign up">
                  <Form
                     onSubmit={onRegisterSubmit}
                     autoComplete="off"
                     className="pt-4"
                  >
                     <Container className="container">
                        <InputGroup className="mb-2">
                           <FormLabel htmlFor="email">Email: </FormLabel>
                           <input
                              className={HeaderCSS.authField}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="peter@gmail.com"
                           />
                        </InputGroup>
                        <InputGroup className="mb-2">
                           <FormLabel htmlFor="login-pass">
                              Password:{" "}
                           </FormLabel>
                           <input
                              className={HeaderCSS.authField}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              name="password"
                              id="password"
                           />
                        </InputGroup>
                        <InputGroup className="mb-1">
                           <FormLabel htmlFor="login-pass">
                              Repeat password:{" "}
                           </FormLabel>
                           <input
                              className={HeaderCSS.authField}
                              type="password"
                              name="repeat-password"
                              id="repeat-password"
                           />
                        </InputGroup>
                        <Button
                           type="submit"
                           className={`w-100 ${HeaderCSS.submit}`}
                        >
                           Register
                        </Button>
                     </Container>
                  </Form>
               </Tab>
            </Tabs>
         </Modal.Body>
      </Modal>
   );
};
