import React from "react";

const Map = () => {
  return (
    <div className="container mt-4 text-center">
      <address>
        <h2 className="mb-4">Our company office location</h2>
      </address>
      <div className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.680471649899!2d72.50151147477057!3d23.035501515846594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf44550dc85%3A0x8952a3770e6af265!2sShilp%20Epitome!5e0!3m2!1sen!2sin!4v1712123534736!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          style={{ width: "100%", height: "35vh" }}
        ></iframe>
      </div>

      <br />
      
    </div>
  );
};

export default Map;
