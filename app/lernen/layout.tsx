import { LangContextProvider } from "@/components/LangContext";
import { TranslationContextProvider } from "@/components/TranslationContext";

import Link from "next/link";


type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return <div>{children}</div>;
    
}
