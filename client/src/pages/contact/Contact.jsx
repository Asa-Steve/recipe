import { useEffect, useState } from "react";
import "./Contact.scss";
import Loader from "../../components/loader/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    const timeout = setTimeout(() => setLoading(false), 1000); // Auto-hide after 0.5s

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <section className="contact">
        <div className="container">
          <h1>Contact Us Today</h1>

          <div className="form_section">
            <div className="left">
              <form action="">
                <div className="row">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData?.name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData?.email || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData?.message || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button>Submit</button>
              </form>
            </div>
            <div className="right">
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="img_wrap">
                <img src="/imgs/chef.png" alt="chef-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
