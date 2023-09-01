import '../../styles/Contact/Contact.css'
import '../../styles/Contact/Contact800.css'
import Footer from '../Footer/Footer'
export default function Contact() {
    return <div>
            {/* <Nav /> */}
        
        <div className='contactSection'>
            <h1>Contact Info</h1>
            {window.innerWidth > '800' && <p>Got a question or something to share? Shoot us a message, and we'll be happy to assist!</p>}
            <div className='contactOuterDiv'>
                <div className='contactInnerDiv'>

                    <h1>Contact Information</h1>
                    <div className='contactInnerInnerDiv'>
                        <p><i class="fa-solid fa-phone-volume"></i><span>+8856 89676 679</span></p>
                        <p><i class="fa-solid fa-envelope"></i><span>demo@gmail.com</span></p>
                        <p><i class="fa-solid fa-location-dot"></i><span>123 Bashundhara, Uttara 56762 Bangladesh</span></p>
                    </div>
                </div>
            </div>
        </div>
        {window.innerWidth > '800' && <Footer />}
        {/* {window.innerWidth <= 800 && <NavMobile />} */}

    </div>
}