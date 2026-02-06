import logo from "@/assets/emerald-paints-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 bg-hero text-hero-foreground/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo in white container on dark background */}
          <div className="bg-white rounded-lg p-2">
            <img
              src={logo}
              alt="Emerald Paints"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          <p className="text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Emerald Paints LLC. All rights
            reserved. Professional painting services for Colorado homeowners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
