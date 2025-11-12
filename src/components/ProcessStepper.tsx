interface ProcessStepperProps {
  currentStep: number;
}

const steps = ["Vorprüfung", "Digitaltauglichkeit erarbeiten", "Dokumentation"];

export const ProcessStepper = ({ currentStep }: ProcessStepperProps) => {
  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1 justify-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors mb-2 ${
                    index + 1 === currentStep
                      ? "border-primary bg-primary text-primary-foreground"
                      : index + 1 < currentStep
                      ? "border-primary bg-background text-primary"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <span
                  className={`text-sm font-medium text-center max-w-[120px] ${
                    index + 1 === currentStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-2 md:mx-4 bg-border max-w-[100px] lg:max-w-[200px] mt-[-40px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
