import { LangContextProvider } from "@/components/LangContext";
import { TranslationContextProvider } from "@/components/TranslationContext";




type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return <div>{children}</div>;
    
}
