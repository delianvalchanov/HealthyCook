import { Services } from '../components/Services/Services'
import { About } from '../components/About/About'
import { Menu } from '../components/Menu/Menu'
import { Reservation } from '../components/Reservation/Reservation'
import { Staff } from '../components/Services/Staff'
import { Testimonial } from '../components/Services/Testimonial'
import { BackOnTopArrow } from '../components/BackOnTopArrow/BackOnTopArrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
export const HomePage = () => {
    const headingIcon = <FontAwesomeIcon icon={faUtensils} />;
    return (
        <div className="container-xxl bg-white p-0">
            <Services />
            <About />
            <Menu />
            <Reservation />
            <Staff />
            <Testimonial />
            <BackOnTopArrow />
        </div >

    )
}