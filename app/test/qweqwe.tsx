"use client"
import { useRef, useState } from "react";
import { useTranslationContext } from "@/components/TranslationContext";

type Results = String
export default function TestPage() {
    const { translations, setTranslations } = useTranslationContext();
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState<Results>({});
    
    function handleInputChange(original: string, event: any, id:string) {
        const newInputValue = { ...userAnswers, [original]: event.target.value, [id]: id };
        setUserAnswers(newInputValue);
    };
    
    function handleSubmit(id: string, original: string, translation: string) {
        const translationObj = translations.find((item) => item.id === id);
        if (translationObj && userAnswers[original] === translationObj.translation) {
            setResults(prevResults => ({ ...prevResults, [id]: "RRRRRRRR" }));
        } else if (translationObj && userAnswers[original] !== translationObj.translation) {
            setResults(prevResults => ({ ...prevResults, [id]: "FFFFFFFF" }));
        }
    }
    
    return (
        <>
            <h1 className="center">Test</h1>
            {translations.map(({ id, original, translation }) => (
                <div className="center" key={id}>
                    <div className="centerColumn">
                        <div className="original">{original}</div>
                        
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                onChange={(e) => handleInputChange(original, e, id)}
                            />
                            <button id={id} onClick={() => handleSubmit(id, original, translation)}>
                                Prüfen
                            </button>
                            <p>{results[id]}</p>
                        </form>
                        <br />
                    </div>
                </div>
            ))}
        </>
    )
}

