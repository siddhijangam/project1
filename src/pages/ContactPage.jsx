import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-contact"
        style={{
          height: "300px",
          padding: "80px 20px",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(90deg, #8905c7ff 0% , #cb5cffff 0%, #5c05c7ff 0%, #c513b9ff 70%, #850094ff 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "white" }}>
          Contact Us
        </h1>

        {/* 👉 breadcrumb text */}
        <p style={{ marginTop: "10px", fontSize: "18px", color: "white" }}>
          Home | Contact
        </p>

       
      </section>

      {/* Map Section */}
      <section style={{ margin: "40px auto", maxWidth: "1100px"  }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1756976304044!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Form */}
          <div>
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Get in Touch</h2>
            <form>
              <textarea
                placeholder="Enter Message"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  minHeight: "120px",
                }}
              />
              <p>um...yea, you have to write something to send this form.</p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                {/* Name Input with Suggestions */}
                <input
                  type="text"
                  placeholder="Enter your name"
                  list="nameSuggestions"
                  style={{
                    flex: 1,
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <datalist id="nameSuggestions">
                  <option value="Siddhi" />
                  <option value="Anjali" />
                  <option value="Priya" />
                  <option value="Sneha" />
                </datalist>

                {/* Email Input with Suggestions */}
                <input
                  type="email"
                  placeholder="Email"
                  list="emailSuggestions"
                  style={{
                    flex: 1,
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <datalist id="emailSuggestions">
                  <option value="example@gmail.com" />
                  <option value="hello@yahoo.com" />
                  <option value="contact@domain.com" />
                </datalist>
              </div>

              <div style={{ display: "flex", gap: "125px" }}>
                <p>come on, you have a name, don't you?</p>
                <p>no email, no message</p>
              </div>

              {/* Subject Input with Suggestions */}
              <input
                type="text"
                placeholder="Enter Subject"
                list="subjectSuggestions"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "15px",
                }}
              />
              <datalist id="subjectSuggestions">
                <option value="General Inquiry" />
                <option value="Support Request" />
                <option value="Feedback" />
                <option value="Collaboration" />
              </datalist>

              <p>come on, you have a subject, don't you?</p>

              <button
                type="submit"
                style={{
                  padding: "12px 30px",
                  background: "white",
                  color: "#8000ff",
                  border: "2px solid #8000ff",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ marginTop: "55px", marginLeft: "50px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h5>
                <i className="bi bi-geo-alt"></i> Address
              </h5>
              <p>
                Buttonwood, California.
                <br />
                Rosemead, CA 91770
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h5>
                <i className="bi bi-phone"></i> Phone
              </h5>
              <p>
                +1 253 565 2365
                <br />
                Mon to Fri 9am to 6pm
              </p>
            </div>

            <div>
              <h5>
                <i className="bi bi-envelope-at"></i> Email
              </h5>
              <p>
                support@colorlib.com
                <br />
                Send us your query anytime!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
