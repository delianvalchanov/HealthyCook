import { Services } from '../components/Services'
import { About } from '../components/About'
import { Menu } from '../components/Menu'
import { Reservation } from '../components/Reservation'
import { Staff } from '../components/Staff'
import { Testimonial } from '../components/Testimonial'
import { BackOnTopArrow } from '../components/BackOnTopArrow'
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