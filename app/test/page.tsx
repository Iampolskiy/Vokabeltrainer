"use client"
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { useTranslationContext } from "@/components/TranslationContext";

type Results = {
    [id: string]: string;
};

export default function TestPage() {
    const { translations, setTranslations } = useTranslationContext();
    const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
    const [results, setResults] = useState<Results>({});

    function handleInputChange(original: string, event: ChangeEvent<HTMLInputElement>, id: string) {
        const newInputValue = { ...userAnswers, [original]: event.target.value, [id]: id };
        setUserAnswers(newInputValue);
    }

    function handleSubmit(id: string, original: string, translation: string) {
        const translationObj = translations.find((item) => item.id === id);
        if (translationObj && userAnswers[original] === translationObj.translation) {
            setResults((prevResults) => ({ ...prevResults, [id]: "Richtig" }));
        } else if (translationObj && userAnswers[original] !== translationObj.translation) {
            setResults((prevResults) => ({ ...prevResults, [id]: "Falsch" }));
        }
    }

    return (
        <>
            <h1 className="center title ">Vokabeln abfragen</h1>
            {translations.map(({ id, original, translation }) => (
                <div className="" key={id}>
                    <div className="original">{original}</div>
                    <br />
                    <div className="testCenter">
                        <form className="" /*evtl. besser relative */ onSubmit={(e: FormEvent) => e.preventDefault()}>
                            <input
                                className="wordCheckInput"
                                type="text"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(original, e, id)}
                            />
                            <button className="wordCheckBtn " /*evtl. besser absolute */ id={id} onClick={() => handleSubmit(id, original, translation)}>
                                Prüfen
                            </button>
                            <p>{results[id]}</p>
                        </form>
                        <br />
                    </div>
                </div>
            ))}
        </>
    );
}


/* "use client"
import { useRef, useState } from "react";
import { useTranslationContext } from "@/components/TranslationContext";

type Results = String
export default function TestPage() {
    const { translations, setTranslations } = useTranslationContext();
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState({});

    function handleInputChange(original: string, event: any, id: string) {
        const newInputValue = { ...userAnswers, [original]: event.target.value, [id]: id };
        setUserAnswers(newInputValue);
    };

    function handleSubmit(id: String, original: String, translation: String) {
        const translationObj = translations.find((item) => item.id === id);
        if (translationObj && userAnswers[original] === translationObj.translation) {
            setResults(prevResults => ({ ...prevResults, [id]: "Richtig" }));
        } else if (translationObj && userAnswers[original] !== translationObj.translation) {
            setResults(prevResults => ({ ...prevResults, [id]: "Falsch" }));
        }
    }

    return (
        <>
            <h1 className="center title ">Vokabeln abfragen</h1>
            {translations.map(({ id, original, translation }) => (
                <div className="" key={id}>
                    <div className="original">{original}</div>
                    <br />
                    <div className="testCenter">
                        <form className=""  action="" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="wordCheckInput"
                                type="text"
                                onChange={(e) => handleInputChange(original, e, id)}
                            />
                            <button className="wordCheckBtn "  id={id} onClick={() => handleSubmit(id, original, translation)}>
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
 */



