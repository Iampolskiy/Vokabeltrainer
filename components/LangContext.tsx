"use client";
import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

const LangContext = createContext<{
    lang: String;
    setLang: Dispatch<SetStateAction<String>>;
}>(null!);

export function LangContextProvider({ children }: Props) {
    const [lang, setLang] = useState<String>("EN");
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLangContext() {
    return useContext(LangContext);
}
