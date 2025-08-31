import { mySocials } from "../constants";

const Footer = () => {
  console.log(mySocials);
  return (
    <section className="flex flex-wrap justify-between items-center gap-5 pb-3 text-neutral-400 text-sm c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-400 to-transparent w-full h-[1px]" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, i) => (
          <a href={social.href} key={i}>
            <img src={social.icon} alt={social.name} className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p> &#169; 2025 Nuriddinbek. All rights reserved.</p>
    </section>
  );
};

export default Footer;
