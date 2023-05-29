"use client"

import Axios from "axios";
import type { ApiResponse, Word, TranslatedWord } from "@/types/axios-type";
import {useRef, useState} from "react";
import { useTranslationContext } from "@/components/TranslationContext";
import { TiDelete } from "react-icons/ti";
import { useLangContext } from "@/components/LangContext";
import { log } from "console";

export default function LenrPage() {
    const inputRef = useRef<HTMLInputElement>(null!); //InputFeld Wert
    const [value, setValue] = useState(""); //value word für api
    const { translations, setTranslations } = useTranslationContext();
    const { lang, setLang } = useLangContext();
    console.log(lang);
    setLang(lang);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const wordRef = useRef(null);
    async function handleClick() {
        console.log(lang);
        setLang(lang);
        const word = inputRef.current.value;
        /* const language = "EN"; */
        const language = lang;
        console.log(lang);
        
        
        setValue(word);
        if (word.length < 2) {
            return;
        }
        try {
            const { data } = await Axios<ApiResponse>(
                "https://api-free.deepl.com/v2/translate",
                {
                    params: {
                        auth_key: apiKey,
                        text: word,
                        target_lang: language,
                        source_lang: "DE",
                    },
                }
            );
            const translatedWord = data.translations[0].text;
            const translatLang = data.translations[0].detected_source_language;
            console.log(language);
            
            const newTranslations = [
                ...translations,
                { original: word, id: crypto.randomUUID(), translation: translatedWord },
            ];
            setTranslations(newTranslations);
            inputRef.current.value = ""; // Leeren des Input-Felds nach dem Hinzufügen
        } catch (error) {
            console.log(error);
        }
    }
    function removeWord(id: string) {
        if (translations) {
            const newTranslations = translations.filter(
                (wordPair) => wordPair.id !== id
            );
            setTranslations(newTranslations);
        }
    }
    function textWords() {
        const words = translations.length
        switch (true) {
            case words == 0:
            return "keine Wörter";
        }
        switch (true) {
            case words == 1:
                return translations.length + " " + "Wort";
        }
        switch (true) {
            case words > 1:
                return translations.length + " " +  "Wörter";
        }
    }
    return(
        <>
            <div>
                <h1 className="center title ">Vokabeln hinzufügen</h1>
                <div className="center">
                    Du hast {textWords()} ausgewählt
                </div>
                <div className="center mtMax mbMax">
                    <form className="center" action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" className="wordInput " /*evtl. besser relative */ ref={inputRef} />
                        <button className="wordInputBtn" /*evtl. besser relative */ onClick={handleClick}>+</button>
                    </form>
                </div>
            </div>
            {translations.map(({ id, original, translation }) => (
                <div ref={wordRef} className="" key={`${id}`}>
                        <div className="translationOutput">
                            <div className="">
                                <div className="translationOutputCenter">
                                    <div className="input">
                                        <span className="lang">Deutsch </span>
                                        <div className="translatedText">{original}</div>
                                    </div>
                                    <div className="output">
                                        <span className="lang">{lang}</span>
                                        <div className="translatedText">{translation}</div>
                                    </div>
                                    <div className="removeBtn" onClick={() => removeWord(id)}>
                                    <TiDelete className="svgRemove"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    <br />
                </div>
            ))}
        </>
    )
}