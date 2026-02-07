import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "@/assets/emerald-paints-logo.png";

const StickyHeader = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-2 px-4"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Emerald Paints"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <a 
          href="tel:7204475654" 
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: '#1B6B3A' }}
        >
          <Phone className="w-4 h-4" />
          (720) 447-5654
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
