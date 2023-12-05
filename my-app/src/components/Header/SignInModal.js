import {
    Button,
    Container,
    Form,
    FormLabel,
    InputGroup,
    Modal,
    ButtonGroup
} from "react-bootstrap";
import HeaderCSS from './Header.module.css'


export const SignInModal = ({ show, toggleShow, successfullSubmission }) => {

    return (
        <Modal className={HeaderCSS.wrapper} show={show} toggleShow={toggleShow}>
            <Modal.Header>
                <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    method="POST"
                    autoComplete="on"
                    id={HeaderCSS['login']}
                >
                    <Container className="container">
                        <ButtonGroup className={HeaderCSS.socialButtons}>
                            <button className={HeaderCSS.social} id={HeaderCSS['facebook']}></button>
                            <button className={HeaderCSS.social} id={HeaderCSS['google']}></button>
                            <button className={HeaderCSS.social} id={HeaderCSS['apple']}></button>
                        </ButtonGroup>
                        <InputGroup>
                            <FormLabel htmlFor="email">Email: </FormLabel>
                            <input
                                className={HeaderCSS.authField}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="peter@gmail.com"
                            />
                        </InputGroup>
                        <fieldset>
                            <label htmlFor="login-pass">Password: </label>
                            <input
                                className={HeaderCSS.authField}

                                type="password"
                                name="password"
                                id="password"
                            />
                        </fieldset>
                        <Button
                            type="submit"
                            className={`w-100 ${HeaderCSS.submit}`}
                            value="Submit"
                        >
                            Login
                        </Button>
                        <p>
                            <span>
                                If you don't have profile, click <a href="#">here</a>
                            </span>
                        </p>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
