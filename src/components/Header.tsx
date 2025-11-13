import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="BayStMD Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold text-foreground">
              Digitalcheck 2.0
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Start
            </NavLink>
            <NavLink
              to="/fragebogen"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Fragebogen
            </NavLink>
            <NavLink
              to="/ergebnis"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Ergebnis
            </NavLink>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <NavLink
                  to="/"
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-medium"
                >
                  Start
                </NavLink>
                <NavLink
                  to="/fragebogen"
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-medium"
                >
                  Fragebogen
                </NavLink>
                <NavLink
                  to="/ergebnis"
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-medium"
                >
                  Ergebnis
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
