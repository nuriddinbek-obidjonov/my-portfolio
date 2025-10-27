import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t, i18n] = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messege: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [alertType, setalertType] = useState("success");
  const [alertMessege, setalertMessege] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      await emailjs.send(
        "service_mqh525j",
        "template_xjt4fsg",
        {
          from_name: formData.name,
          to_name: "Nuriddinbek",
          from_email: formData.email,
          to_email: "nuriddinbek.obidjonov@gmail.com",
          messege: formData.messege,
        },
        "T2E7L0D211OnHdkAS"
      );
      setisLoading(false);
      setFormData({
        name: "",
        email: "",
        messege: "",
      });
      setshowAlert(true);
      setalertType("success");
      setalertMessege("Messege sent successfully.");
      setTimeout(() => {
        setshowAlert(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      setisLoading(false);
      setshowAlert(true);
      setalertType("danger");
      setalertMessege("Something went wrong");
      setTimeout(() => {
        setshowAlert(false);
      }, 5000);
    }
  };
  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing">
      <Particles
        className="-z-50 absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessege} />}
      <div className="flex flex-col justify-center items-center bg-transparent backdrop-blur-[3px] mx-auto p-5 border border-white/10 rounded-2xl max-w-md">
        <div className="flex flex-col gap-5 mb-10 w-full text-start">
          <h2 className="text-heading">{t("contact.heading")}</h2>
          <p className="font-normal text-neutral-400">{t("contact.text")}</p>
        </div>
        <form action="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              {t("contact.form.inputname")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              {t("contact.form.inputemail")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="johndoe@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="messege" className="feild-label">
              {t("contact.form.inputmessege")}
            </label>
            <textarea
              type="text"
              rows="4"
              id="messege"
              name="messege"
              className="field-input field-input-focus"
              placeholder={t("contact.form.placeholder")}
              autoComplete="messege"
              value={formData.messege}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-radial from-lavender to-royal px-1 py-3 rounded-md w-full text-lg text-center cursor-pointer to hover-animation">
            {isLoading
              ? t("contact.form.btnsending")
              : t("contact.form.btnsend")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
