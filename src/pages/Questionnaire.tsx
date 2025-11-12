import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from "@/components/Stepper";
import { QuestionSidebar } from "@/components/QuestionSidebar";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";

type Answers = Record<string, string>;

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>(undefined);

  const steps = ["Vorprüfung", "Vertiefung", "Ergebnis"];
  const vorpruefungQuestions = questions.filter((q) => q.step === "vorpruefung");
  const currentQuestion = vorpruefungQuestions[currentQuestionIndex];

  useEffect(() => {
    setCurrentAnswer(answers[currentQuestion.id]);
  }, [currentQuestionIndex, currentQuestion.id, answers]);

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    if (currentAnswer) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: currentAnswer,
      }));
    }

    if (currentQuestionIndex < vorpruefungQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigate("/ergebnis");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleQuestionSelect = (questionId: string) => {
    const index = vorpruefungQuestions.findIndex((q) => q.id === questionId);
    if (index !== -1) {
      setCurrentQuestionIndex(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Stepper currentStep={currentStep} steps={steps} />
      
      <div className="flex flex-1">
        <QuestionSidebar
          questions={vorpruefungQuestions}
          currentQuestionId={currentQuestion.id}
          onQuestionSelect={handleQuestionSelect}
          answers={answers}
        />
        
        <main className="flex-1 overflow-auto py-12">
          <QuestionCard
            question={currentQuestion}
            answer={currentAnswer}
            onAnswerChange={handleAnswerChange}
            onNext={handleNext}
            onBack={handleBack}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === vorpruefungQuestions.length - 1}
          />
        </main>
      </div>
    </div>
  );
};

export default Questionnaire;
