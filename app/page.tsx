"use client"

import Link from "next/link";
import { useLangContext } from "@/components/LangContext";

/* export const metadata = {
  title: "Vokabeltrainer!",
  description: "Vokabeln lernen und abfragen",
};
*/
export default function Home() {
  const { lang, setLang } = useLangContext();
  
  function showLang(lang:String) {
    switch(lang) {
      case "EN":
      return "Englisch"
      break;
      case "ES":
      return "Spanisch"
      break;
      case "RU":
      return "Russisch"
      break;
      case "ZH":
      return "Chinesisch"
      break;
      case "FR":
      return "Französisch"
      break;
    }
    return lang
  }
  
  return (
    <main>
      <div>
        <h1 className="center title">Willkommen beim Vokabeltrainer</h1>
        <h3 className="center title">
          Hier kannst du Vokablen lernen und abfragen
        </h3>
        <h2 className="center">{showLang(lang)}</h2>
        <form action="">
          <label className="center" htmlFor="lang">Sprache:</label>
          <select className="center m0auto langInput" value={lang.toString()} onChange={(e) => setLang(e.target.value)} id="lang" name="lang">
            <option value="EN">English</option>
            <option value="RU">Русский</option>
            <option value="FR">Français</option>
            <option value="ES">Español</option>
            <option value="ZH">中国人</option>
          </select>
        </form>
        <div className="auto center">
          <Link className="center link" href={"/lernen"}>
            Start
          </Link>
        </div>
      </div>
    </main>
  );
}
