import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ProcessStepper } from "@/components/ProcessStepper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ProcessStepper currentStep={1} />
      
      <main className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Vorprüfung: Digitalbezug einschätzen
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              Finden Sie in 6 Fragen heraus, ob Sie in Ihrem Regelungsvorhaben Aspekte
              der digitalen Umsetzung und EU-Anforderungen an Interoperabilität
              beachten müssen.
            </p>
          </div>

          {/* Accordion Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="digitalbezug">
              <AccordionTrigger className="text-primary hover:text-primary/80">
                Was ist Digitalbezug?
              </AccordionTrigger>
              <AccordionContent className="text-foreground">
                <p>
                  Ein Regelungsvorhaben hat Digitalbezug, wenn es digitale Prozesse,
                  Technologien oder Datenverarbeitung betrifft oder beeinflusst.
                  Dies umfasst alle Regelungen, die sich auf die Digitalisierung
                  von Verwaltungsleistungen, elektronische Kommunikation oder
                  digitale Infrastruktur auswirken.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="interoperabilitaet">
              <AccordionTrigger className="text-primary hover:text-primary/80">
                Was ist Interoperabilität?
              </AccordionTrigger>
              <AccordionContent className="text-foreground">
                <p>
                  Interoperabilität bezeichnet die Fähigkeit verschiedener Systeme,
                  Organisationen und Anwendungen zusammenzuarbeiten und Daten
                  auszutauschen. Im Kontext der EU-Anforderungen bedeutet dies,
                  dass digitale öffentliche Dienste über Grenzen hinweg
                  reibungslos funktionieren und miteinander kommunizieren können.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate("/fragebogen")} 
              size="lg"
              className="w-full sm:w-auto"
            >
              Vorprüfung starten
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              Zurück
            </Button>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="zusammengefasst" className="w-full mt-12">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="zusammengefasst">Zusammengefasst</TabsTrigger>
              <TabsTrigger value="digitalbezug-info">
                Digitalbezug und Interoperabilität
              </TabsTrigger>
              <TabsTrigger value="faq">Häufige Fragen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="zusammengefasst" className="space-y-6 mt-6">
              <h2 className="text-3xl font-bold text-foreground">
                Zusammengefasst
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Beginnen Sie so früh wie möglich
                </h3>
                <p className="text-foreground leading-relaxed">
                  Führen Sie die Vorprüfung zu Beginn Ihrer Arbeit an einem
                  Regelungsvorhaben durch. Das heißt bevor Sie den Regelungstext
                  formulieren.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="digitalbezug-info" className="space-y-6 mt-6">
              <h2 className="text-3xl font-bold text-foreground">
                Digitalbezug und Interoperabilität
              </h2>
              <p className="text-foreground leading-relaxed">
                Inhalt folgt in Kürze...
              </p>
            </TabsContent>
            
            <TabsContent value="faq" className="space-y-6 mt-6">
              <h2 className="text-3xl font-bold text-foreground">
                Häufige Fragen
              </h2>
              <p className="text-foreground leading-relaxed">
                Inhalt folgt in Kürze...
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Index;
