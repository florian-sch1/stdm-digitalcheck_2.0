import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface IntroScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const IntroScreen = ({ onNext, onBack }: IntroScreenProps) => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <Card>
        <CardHeader>
          <CardTitle>Allgemeine Hinweise</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-foreground">
            Alle Fragen beziehen sich auch auf die <strong>Umsetzung</strong> nach Inkrafttreten des Regelungsvorhabens.
          </p>
          
          <div className="border border-border rounded-lg p-4 bg-secondary">
            <div className="flex gap-3">
              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">
                  Eine oder mehrere Vorprüfungen?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Füllen Sie eine gemeinsame Vorprüfung für alle inhaltlich zusammenhängenden Regelungen eines Vorhabens aus. So viele wie nötig, so wenige wie möglich.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Zurück
          </Button>
          <Button onClick={onNext}>
            Okay & weiter
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
