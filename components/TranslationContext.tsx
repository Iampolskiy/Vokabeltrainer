"use client";
import type { Word } from "@/types/axios-type";
import type { Dispatch, SetStateAction } from "react";

type Props = {
    children: React.ReactNode;
};

import { createContext, useContext, useState } from "react";

const TranslationContext = createContext<{
    translations: Word[];
    setTranslations: Dispatch<SetStateAction<Word[]>>;
}>(null!);

export function TranslationContextProvider({ children }: Props) {
    const [translations, setTranslations] = useState<Word[]>([]);

    return (
        <TranslationContext.Provider value={{ translations, setTranslations }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslationContext() {
    return useContext(TranslationContext);
}
