import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    const fromName = form.current.elements.user_name.value;
    const fromEmail = form.current.elements.user_email.value;

    emailjs.sendForm(
      process.env.REACT_APP_DEFAULT_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
      {
        from_name: fromName,
        from_email: fromEmail,
      }
      )
    .then(
      () => {
      alert('Message sent successfully!')
      window.location.reload(false)
    }, () => {
      alert('Failed to send!, please try again')
    });
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C','o','n','t','a','c','t',' ','m','e','.']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>If you have any requests or questions then please do not hesistate to contact me using the below form</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="user_name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="user_email" placeholder="Email" required />
                </li>
                <li className="half">
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li className="half">
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li className="half">
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kostas Koliolios,
          <br />
          United Kingdom,
          <br />
          London
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.51302986806985, -0.30556280428652055]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.51302986806985, -0.30556280428652055]}>
              <Popup>Kostas lives around here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact;
