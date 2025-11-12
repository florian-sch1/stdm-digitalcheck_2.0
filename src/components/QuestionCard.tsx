import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
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
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const [isDefinitionOpen, setIsDefinitionOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          {question.question}
        </h1>
        {question.definitionText && (
          <Collapsible open={isDefinitionOpen} onOpenChange={setIsDefinitionOpen} className="mb-2">
            <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight 
                className={`h-4 w-4 transition-transform duration-200 ${isDefinitionOpen ? 'rotate-90' : ''}`} 
              />
              <span>{question.definitionLabel}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <p className="text-sm text-muted-foreground italic">
                {question.definitionText}
              </p>
            </CollapsibleContent>
          </Collapsible>
        )}
        {question.example && (
          <Collapsible open={isExampleOpen} onOpenChange={setIsExampleOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight 
                className={`h-4 w-4 transition-transform duration-200 ${isExampleOpen ? 'rotate-90' : ''}`} 
              />
              <span>Beispiel</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <p className="text-sm text-muted-foreground italic">
                {question.example}
              </p>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>

      <div className="mb-8">
        <RadioGroup key={question.id} value={answer} onValueChange={onAnswerChange}>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="ja" id={`ja-${question.id}`} />
              <Label htmlFor={`ja-${question.id}`} className="flex-1 cursor-pointer">
                Ja
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="nein" id={`nein-${question.id}`} />
              <Label htmlFor={`nein-${question.id}`} className="flex-1 cursor-pointer">
                Nein
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="unsicher" id={`unsicher-${question.id}`} />
              <Label htmlFor={`unsicher-${question.id}`} className="flex-1 cursor-pointer">
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
