import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div className="header">
            <Link className="center link" href={"/"}>
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
