import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from "@/components/Stepper";
import { QuestionSidebar } from "@/components/QuestionSidebar";
import { QuestionCard } from "@/components/QuestionCard";
import { IntroScreen } from "@/components/IntroScreen";
import { questions } from "@/data/questions";

type Answers = Record<string, string>;

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>(undefined);

  const steps = ["Vorprüfung", "Vertiefung", "Ergebnis"];
  const vorpruefungQuestions = questions.filter((q) => q.step === "vorpruefung");
  const currentQuestion = vorpruefungQuestions[currentQuestionIndex];

  useEffect(() => {
    setCurrentAnswer(answers[currentQuestion.id]);
  }, [currentQuestionIndex, currentQuestion.id, answers]);

  const handleIntroNext = () => {
    setShowIntro(false);
  };

  const handleIntroBack = () => {
    navigate("/");
  };

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    // Create updated answers object immediately with current answer
    const updatedAnswers = currentAnswer 
      ? { ...answers, [currentQuestion.id]: currentAnswer }
      : answers;

    // Update state for next question
    if (currentAnswer) {
      setAnswers(updatedAnswers);
    }

    if (currentQuestionIndex < vorpruefungQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Pass updated answers (including q6!) to result page
      navigate("/ergebnis", { state: { answers: updatedAnswers } });
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
          currentQuestionId={showIntro ? "" : currentQuestion.id}
          onQuestionSelect={showIntro ? () => {} : handleQuestionSelect}
          answers={answers}
        />
        
        <main className="flex-1 overflow-auto py-12">
          {showIntro ? (
            <IntroScreen 
              onNext={handleIntroNext}
              onBack={handleIntroBack}
            />
          ) : (
            <QuestionCard
              question={currentQuestion}
              answer={currentAnswer}
              onAnswerChange={handleAnswerChange}
              onNext={handleNext}
              onBack={handleBack}
              isFirst={currentQuestionIndex === 0}
              isLast={currentQuestionIndex === vorpruefungQuestions.length - 1}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Questionnaire;
