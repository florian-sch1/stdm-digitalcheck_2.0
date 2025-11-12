import { Check } from "lucide-react";
import { Question } from "@/data/questions";

interface QuestionSidebarProps {
  questions: Question[];
  currentQuestionId: string;
  onQuestionSelect: (questionId: string) => void;
  answers: Record<string, string>;
}
export const QuestionSidebar = ({
  questions,
  currentQuestionId,
  onQuestionSelect,
  answers
}: QuestionSidebarProps) => {
  return <div className="w-64 border-r border-border bg-background h-full">
      <div className="p-6">
        
        <nav className="space-y-1">
          {questions.map((question) => <button key={question.id} onClick={() => onQuestionSelect(question.id)} className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${question.id === currentQuestionId ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`}>
              <span className="flex items-center gap-2">
                {answers[question.id] && (
                  <Check className="h-4 w-4 text-success flex-shrink-0" />
                )}
                <span className="flex-1">{question.category}</span>
              </span>
            </button>)}
        </nav>
      </div>
    </div>;
};