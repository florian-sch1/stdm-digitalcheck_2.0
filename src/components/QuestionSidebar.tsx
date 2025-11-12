import { Question } from "@/data/questions";

interface QuestionSidebarProps {
  questions: Question[];
  currentQuestionId: string;
  onQuestionSelect: (questionId: string) => void;
}

export const QuestionSidebar = ({
  questions,
  currentQuestionId,
  onQuestionSelect,
}: QuestionSidebarProps) => {
  return (
    <div className="w-64 border-r border-border bg-background h-full">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-foreground mb-4">Fragen</h2>
        <nav className="space-y-1">
          {questions.map((question, index) => (
            <button
              key={question.id}
              onClick={() => onQuestionSelect(question.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                question.id === currentQuestionId
                  ? "bg-muted text-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <span className="block">
                {index + 1}. {question.category}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
