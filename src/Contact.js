import './Contact.css';
import linkedin from './linkedin.png'
import github from './github.png'
import email from './email.png'

function Contact() {
  return (
    <div className="Contact">
        <a href="https://linkedin.com/in/adrián-lábaro-herrera-trillo-b57693181">
            <img src={linkedin} className='linkedin'></img>
        </a>
        <img src={github} className='github'></img>
        <img src={email} className='email'></img>
    </div>
  );
}

export default Contact;
