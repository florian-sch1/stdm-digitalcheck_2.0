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
    question: "Enthält oder verursacht die Regelung Mitwirkungspflichten für Beteiligte (Bürger, Unternehmen, staatliche Stellen)?",
    example: "z.B. Einhaltung von Fristen, Dokumentationspflichten, Vertragsbedingungen",
    step: "vorpruefung",
  },
  {
    id: "q3",
    category: "Digitale Kommunikation",
    question: "Löst der Vollzug der Regelung Kommunikation zwischen Beteiligten aus?",
    example: "z.B. E-Mail, Messenger, Online-Portale, soziale Medien",
    step: "vorpruefung",
  },
  {
    id: "q4",
    category: "Datennutzung",
    question: "Werden Daten erhoben oder können vorhandene Daten (auch von anderen Stellen) wiederverwendet werden?",
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
