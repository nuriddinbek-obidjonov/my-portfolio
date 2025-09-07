import { useTranslation } from "react-i18next";

function Language() {
  const [t, i18n] = useTranslation();

  const languages = localStorage.getItem("i18nextLng") || "EN";

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select
      name="langs"
      id=""
      className="bg-transparent border-none"
      onChange={changeLanguage}
      value={languages}>
      <option value="uz" className="bg-slate-300 text-black">
        UZ
      </option>
      <option value="en" className="bg-slate-300 text-black">
        EN
      </option>
      <option value="ru" className="bg-slate-300 text-black">
        RU
      </option>
    </select>
  );
}
export default Language;
