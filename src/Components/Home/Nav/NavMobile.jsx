import { useNavigate } from 'react-router'
import '../../../styles/Home/Nav/NavMobile.css'
import { auth } from '../../../firebase/firebase';
export default function NavMobile() {
    const navigate = useNavigate();
    return (<div className="bottomnav">

        <div className='innerdiv'>
            {/* <img src='/wallet.svg' /> */}

            <i onClick={function () {
                navigate('/AGOI/');
            }} class="fa-solid fa-house"></i>
            <i onClick={function () {
                navigate('/AGOI/#contact');
            }} class="fa-solid fa-phone-volume"></i>
            {/* <i onClick={async function(){
                await auth.signOut();
            }} class="fa-solid fa-right-from-bracket"></i> */}
            <i onClick={function(){
                document.getElementById("navbar").classList.toggle("left");

            }} class="fa-solid fa-bars"></i>

        </div>
    </div>)
}