import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-solid-svg-icons';
import { faYoutube} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-solid-svg-icons';
import { faFacebook} from '@fortawesome/free-solid-svg-icons';
import { faTwitter} from '@fortawesome/free-solid-svg-icons';
function Footers() {
    return ( 
        <div>
      <footer>
        <section className='social' id='contact'>
            <article>
                <h3>Let's be socical connect with us</h3>
                <div className='socialIcons'>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </article>
        </section>

        <section className="contactInfo">
            <article>
                <h4>Contatct Information</h4>
                <ul>
                    <li>Phone : 123-456-7890</li>
                    <li>Email : eshopay@code.id</li>
                    <li>Address : Sentul City</li>
                </ul>
                <p class="copy">Codeid Academy &copy;2021</p>
            </article>
        </section>
      </footer>
    </div>
     );
}

export default Footers;