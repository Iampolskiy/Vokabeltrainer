/* import { LangContextProvider } from "@/components/LangContext"; */

type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return <div>{children}</div>;
}
