import logo from "@/assets/emerald-paints-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo sits naturally on white background - no container needed */}
          <img
            src={logo}
            alt="Emerald Paints"
            className="h-12 sm:h-14 w-auto"
          />

          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Emerald Paints LLC. All rights
            reserved. Professional painting services for Colorado homeowners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
