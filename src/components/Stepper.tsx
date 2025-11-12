interface StepperProps {
  currentStep: number;
  steps: string[];
}

export const Stepper = ({ currentStep, steps }: StepperProps) => {
  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    index + 1 === currentStep
                      ? "border-primary bg-primary text-primary-foreground"
                      : index + 1 < currentStep
                      ? "border-muted-foreground bg-muted-foreground text-background"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  <span className="text-sm font-medium">{index + 1}</span>
                </div>
                <span
                  className={`ml-3 text-sm font-medium ${
                    index + 1 === currentStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-4 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
