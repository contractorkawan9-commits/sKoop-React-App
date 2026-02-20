import React, { useRef } from 'react';
import './Location.css';

/**
 * Location page component.
 * Displays the store's location via Google Maps and provides a contact form.
 * It features a dynamically resizing textarea for messages.
 */
export function Location() {
  const messageBoxRef = useRef(null);

  /**
   * Dynamically adjusts the height of the message textarea based on its content.
   * This provides a better user experience for typing longer messages.
   */
  const handleInput = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.style.height = '';
      messageBoxRef.current.style.height = messageBoxRef.current.scrollHeight + 'px';
    }
  };

  return (
    <div className="locationPage">
      <div className="locationBody">
        {/* Map Container Section */}
        <div className="mapContainer">
          <iframe 
            className="googleMaps" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60220.971897185016!2d72.77970791424386!3d19.377345763662706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae956bc1587b%3A0x864f53a94baa5145!2sVasai-Virar%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sca!4v1767487726892!5m2!1sen!2sca" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="sKoop Location"
          ></iframe>
          
          <a 
            className="mapAddress" 
            href="https://www.google.com/maps/place/Vasai-Virar,+Maharashtra,+India/@19.3773458,72.7797079,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7ae956bc1587b:0x864f53a94baa5145!8m2!3d19.3919275!4d72.8397317!16zL2m/MDZja3Q4?authuser=3&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" 
            target="_blank" 
            rel="noreferrer"
          >
            <p>📍Vasai Road, Opp. Diwanman Talav, Palghar 401202. Maharashtra India. </p>
          </a>
        </div>

        {/* Vertical Separator Line */}
        <div className="verticalLine"></div>

        {/* Contact Form Section */}
        <div className="contactSection">
          <h1>
            Contact your <span className="brandFont">sKoop </span>         
          </h1>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="formRow">
              <label> Name </label>
              <input className="contactInput" type="text" placeholder="Enter Your Name" required />
            </div>  
      
            <div className="formRow">
              <label> Email </label>
              <input className="contactInput" type="text" placeholder="Enter Your Email" required />
            </div>

            <div className="formRow">
              <label> Number </label>
              <input className="contactInput" type="text" placeholder="Enter Your Contact Number" />
            </div>

            <div className="formRow">
              <label> Message </label>
              <textarea 
                ref={messageBoxRef}
                className="contactInput messageBox" 
                placeholder="What's on your mind?" 
                onInput={handleInput}
                required
              ></textarea>
            </div>

            <button type="submit" className="submitBtn">Send sKoop</button>
          </form>
        </div>
      </div>

      <div className="bottomSpace"></div>
    </div>
  );
}