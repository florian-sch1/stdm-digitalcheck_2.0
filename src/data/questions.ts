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
    question: "Wird zum Vollzug der Regelung die Nutzung, Anpassung oder Neuentwicklung einer IT-Lösung erforderlich bzw. könnte der Vollzug dadurch vereinfacht oder verbessert werden?",
    example: "z.B. ERP-Systeme, CRM-Software, Buchhaltungssoftware, Cloud-Dienste",
    step: "vorpruefung",
  },
  {
    id: "q6",
    category: "Automatisierung",
    question: "Kommt (teil-)automatisierte Vollzug in Betracht?",
    example: "z.B. automatische Bonitätsprüfung, algorithmische Preisgestaltung, automatisierte Freigaben",
    step: "vorpruefung",
  },
];
