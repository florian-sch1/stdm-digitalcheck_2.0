export interface Question {
  id: string;
  category: string;
  question: string;
  example?: string;
  definitionLabel?: string;
  definitionText?: string;
  step: "vorpruefung" | "vertieft" | "ergebnis";
}

export const questions: Question[] = [
  {
    id: "q1",
    category: "Digitale Prozesse",
    question: "Enthält die Regelung Verfahrensvorschriften oder sind mit ihr in Zusammenhang stehende Prozesse betroffen?",
    definitionLabel: "Was ist mit \"Prozesse\" gemeint?",
    definitionText: "Prozesse umfassen alle Abläufe und Verfahrensschritte, die zur Umsetzung einer Regelung notwendig sind. Dazu gehören beispielsweise Antrags-, Genehmigungs-, Prüf- oder Meldeverfahren sowie die damit verbundenen Kommunikations- und Dokumentationswege zwischen Beteiligten.",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    step: "vorpruefung",
  },
  {
    id: "q2",
    category: "Verpflichtungen für Beteiligte",
    question: "Enthält oder verursacht die Regelung Mitwirkungspflichten für Beteiligte (Bürger, Unternehmen, staatliche Stellen)?",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    step: "vorpruefung",
  },
  {
    id: "q3",
    category: "Digitale Kommunikation",
    question: "Löst der Vollzug der Regelung Kommunikation zwischen Beteiligten aus?",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    step: "vorpruefung",
  },
  {
    id: "q4",
    category: "Datennutzung",
    question: "Werden Daten erhoben oder können vorhandene Daten (auch von anderen Stellen) wiederverwendet werden?",
    definitionLabel: "Was ist \"Daten\" gemeint?",
    definitionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    step: "vorpruefung",
  },
  {
    id: "q5",
    category: "IT-Systeme",
    question: "Wird zum Vollzug der Regelung die Nutzung, Anpassung oder Neuentwicklung einer IT-Lösung erforderlich bzw. könnte der Vollzug dadurch vereinfacht oder verbessert werden?",
    definitionLabel: "Was ist mit \"IT-Lösung\" gemeint?",
    definitionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    step: "vorpruefung",
  },
  {
    id: "q6",
    category: "Automatisierung",
    question: "Kommt (teil-)automatisierte Vollzug in Betracht?",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    step: "vorpruefung",
  },
];
