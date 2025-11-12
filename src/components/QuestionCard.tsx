import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  answer: string | undefined;
  onAnswerChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const QuestionCard = ({
  question,
  answer,
  onAnswerChange,
  onNext,
  onBack,
  isFirst,
  isLast,
}: QuestionCardProps) => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          {question.question}
        </h1>
        {question.example && (
          <p className="text-sm text-muted-foreground italic">
            Beispiel: {question.example}
          </p>
        )}
      </div>

      <div className="mb-8">
        <RadioGroup value={answer} onValueChange={onAnswerChange}>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="ja" id="ja" />
              <Label htmlFor="ja" className="flex-1 cursor-pointer">
                Ja
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="nein" id="nein" />
              <Label htmlFor="nein" className="flex-1 cursor-pointer">
                Nein
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="unsicher" id="unsicher" />
              <Label htmlFor="unsicher" className="flex-1 cursor-pointer">
                Ich bin unsicher
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={onBack}
          disabled={isFirst}
          className="min-w-[120px]"
        >
          Zurück
        </Button>
        <Button
          onClick={onNext}
          disabled={!answer}
          className="min-w-[180px]"
        >
          {isLast ? "Weiter zum Ergebnis" : "Übernehmen & weiter"}
        </Button>
      </div>
    </div>
  );
};
