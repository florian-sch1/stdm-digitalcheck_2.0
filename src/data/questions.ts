export interface Question {
  id: string;
  category: string;
  question: string;
  example?: string;
  step: "vorpruefung" | "vertieft" | "ergebnis";
}

export const questions: Question[] = [
  {
    id: "q1",
    category: "Digitale Prozesse",
    question: "Enthält die Regelung Verfahrensvorschriften oder sind mit ihr in Zusammenhang stehende Prozesse betroffen?",
    example: "z.B. digitale Rechnungsstellung, Online-Bestellungen, digitale Vertragsunterzeichnung",
    step: "vorpruefung",
  },
  {
    id: "q2",
    category: "Verpflichtungen für Beteiligte",
    question: "Ergeben sich aus den digitalen Prozessen rechtliche Verpflichtungen für die beteiligten Personen?",
    example: "z.B. Einhaltung von Fristen, Dokumentationspflichten, Vertragsbedingungen",
    step: "vorpruefung",
  },
  {
    id: "q3",
    category: "Digitale Kommunikation",
    question: "Nutzt Ihr Unternehmen digitale Kanäle zur Kommunikation mit Kunden oder Geschäftspartnern?",
    example: "z.B. E-Mail, Messenger, Online-Portale, soziale Medien",
    step: "vorpruefung",
  },
  {
    id: "q4",
    category: "Datennutzung",
    question: "Werden personenbezogene Daten im Rahmen der digitalen Prozesse verarbeitet?",
    example: "z.B. Kundendaten, Mitarbeiterdaten, Kontaktinformationen",
    step: "vorpruefung",
  },
  {
    id: "q5",
    category: "IT-Systeme",
    question: "Setzen Sie IT-Systeme zur Unterstützung Ihrer Geschäftsprozesse ein?",
    example: "z.B. ERP-Systeme, CRM-Software, Buchhaltungssoftware, Cloud-Dienste",
    step: "vorpruefung",
  },
  {
    id: "q6",
    category: "Automatisierung",
    question: "Werden Entscheidungen in Ihren digitalen Prozessen automatisiert getroffen?",
    example: "z.B. automatische Bonitätsprüfung, algorithmische Preisgestaltung, automatisierte Freigaben",
    step: "vorpruefung",
  },
];
