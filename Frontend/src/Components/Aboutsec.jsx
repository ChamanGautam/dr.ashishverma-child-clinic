<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9785593019106480"
     crossorigin="anonymous"></script>
import './Aboutsec.css';
import img1 from '../assets/img/drr.png';
const Aboutsec = () =>{
    return(
        <div id='about'>
            <h1 className='about-heading'>About Doctor</h1>
            <div className="aboutsec" >
                <div className="logo">
                    <img src={img1} alt="profile" />
                </div>
                <div className="dr">
                    <h1 className='name'>Dr.Ashish Verma</h1>
                    <p>MBBS, MD (Pedia) MIAP, PGPN (USA)<br/>
                    Senior Consultant Pediatrician <br /> Professor CIMS , Lucknow</p>
                    <h4 className='exhead'>Ex. Child Specialist</h4><hr/>
                        <ul className='exlist'>
                            <li> Medical College Jhansi</li>
                            <li> RML Hospital, New Delhi</li>
                            <li> IGESI Hospital Delhi</li>
                            <li> Fortis Hospital Sec-62, Noida</li>
                            <li> Career Medical College, Lucknow</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}
export default Aboutsec;