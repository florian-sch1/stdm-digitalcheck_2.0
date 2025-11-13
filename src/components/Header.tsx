import { Menu, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-foreground hover:text-primary transition-colors cursor-pointer">
                  Kontakt
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Kontakt</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:digitalcheck@stmd.bayern.de"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      digitalcheck@stmd.bayern.de
                    </a>
                    <a 
                      href="tel:+498945354990"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      089/453549-0
                    </a>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="text-lg text-foreground hover:text-primary transition-colors text-left">
                      Kontakt
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Kontakt</h3>
                      <div className="space-y-2">
                        <a 
                          href="mailto:digitalcheck@stmd.bayern.de"
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          digitalcheck@stmd.bayern.de
                        </a>
                        <a 
                          href="tel:+498945354990"
                          className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          089/453549-0
                        </a>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
