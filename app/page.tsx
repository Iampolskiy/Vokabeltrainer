import Link from "next/link";

export const metadata = {
  title: "Vokabeltrainer!",
  description: "Vokabeln lernen und abfragen",
};

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="center title">Willkommen beim Vokabeltrainer</h1>
        <h3 className="center title">
          Hier kannst du Vokablen lernen und abfragen
        </h3>
        <div className="auto center">
          <Link className="center link" href={"/lernen"}>
            Los gehts
          </Link>
        </div>
      </div>
    </main>
  );
}
