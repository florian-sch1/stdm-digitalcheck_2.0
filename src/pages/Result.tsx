import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

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
