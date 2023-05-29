"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useLangContext } from "@/components/LangContext";


export default function Header() {
    /* const { lang, setLang } = useLangContext(); */
    /* const [lang, setLang] = useState<String>(" "); */
    return (
        <div className="header">
            <Link className="center link" href={"/"} >
                <span>Zurück zu Hauptseite</span>
            </Link>
            <Link className="center link" href={"/lernen"}>
                <span>Vokabeln hinzufügen</span>
            </Link>
            <Link className="center link" href={"/test"}>
                <span>Vokabeln abfragen</span>
            </Link>
        </div>
    );
}
