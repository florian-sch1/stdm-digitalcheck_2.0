import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useNavigate, useLocation } from "react-router-dom";
import { Info, XCircle } from "lucide-react";

type Answers = Record<string, string>;

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = (location.state as { answers?: Answers })?.answers || {};

  // Check if all 6 pre-assessment questions were answered with "nein"
  const allQuestionsAnsweredNo = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']
    .every(questionId => answers[questionId] === 'nein');

  if (allQuestionsAnsweredNo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <Alert>
            <XCircle className="h-5 w-5" />
            <AlertTitle className="text-xl font-semibold">
              Kein Digitalbezug festgestellt
            </AlertTitle>
            <AlertDescription className="mt-2 text-base">
              Basierend auf Ihren Antworten liegt kein Digitalbezug vor. 
              Ein weiterer Digitalcheck ist nicht notwendig.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-5 w-5" />
            <AlertTitle className="font-semibold">
              Wichtiger Hinweis
            </AlertTitle>
            <AlertDescription className="mt-2">
              Bitte stimmen Sie diese Einschätzung mit der Zentralstelle ab, 
              um unterschiedliche Auffassungen in der Ressortanhörung zu vermeiden.
            </AlertDescription>
          </Alert>

          <div className="text-center pt-4">
            <Button onClick={() => navigate("/")} size="lg">
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Ergebnis
        </h1>
        <p className="text-muted-foreground mb-8">
          Diese Seite wird später mit den Auswertungsergebnissen gefüllt.
        </p>
        <Button onClick={() => navigate("/")}>
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  );
};

export default Result;
