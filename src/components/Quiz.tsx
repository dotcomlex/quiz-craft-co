import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Home,
  Building,
  ArrowLeftRight,
  HelpCircle,
  Zap,
  Calendar,
  CalendarClock,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Phone,
  User,
  Mail,
  Loader2,
  Check,
  Bookmark,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type QuizStep = 1 | 2 | 3 | 4;

interface QuizData {
  projectType: string;
  timeline: string;
  zipCode: string;
  firstName: string;
  phone: string;
  email: string;
}

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Colorado ZIP code validation - covers ALL Colorado addresses
const isColoradoZipCode = (zip: string): boolean => {
  if (zip.length !== 5 || !/^\d{5}$/.test(zip)) {
    return false;
  }
  const zipNum = parseInt(zip, 10);
  return zipNum >= 80001 && zipNum <= 81658;
};

// Phone number validation
const isValidPhoneNumber = (
  phone: string
): { valid: boolean; error?: string } => {
  const digits = phone.replace(/\D/g, "");

  if (digits.length !== 10) {
    return { valid: false, error: "Enter a valid 10-digit phone number" };
  }

  const areaCode = digits.substring(0, 3);
  if (areaCode[0] === "0" || areaCode[0] === "1") {
    return { valid: false, error: "Please enter a valid US phone number" };
  }

  const exchangeCode = digits.substring(3, 6);
  if (exchangeCode[0] === "0" || exchangeCode[0] === "1") {
    return { valid: false, error: "Please enter a valid US phone number" };
  }

  return { valid: true };
};

// Rotating messages for ZIP verification - painting specific
const CheckingMessages = ({ zipCode }: { zipCode: string }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    `Checking availability in ${zipCode}...`,
    "Verifying service coverage...",
    "Reviewing painter schedules...",
    "Confirming project capacity...",
    "Finalizing availability check...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={messageIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-base sm:text-lg font-medium text-foreground">
        {messages[messageIndex]}
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Please wait a moment...
      </p>
    </motion.div>
  );
};

interface QuizProps {
  onStart?: () => void;
}

const Quiz = ({ onStart }: QuizProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [needsTimelineClarification, setNeedsTimelineClarification] =
    useState(false);
  const [timelineDisqualified, setTimelineDisqualified] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    phone?: string;
    email?: string;
  }>({});
  const [isCheckingZip, setIsCheckingZip] = useState(false);
  const [data, setData] = useState<QuizData>({
    projectType: "",
    timeline: "",
    zipCode: "",
    firstName: "",
    phone: "",
    email: "",
  });

  const handleTileSelect = (field: string, value: string) => {
    if (step === 1 && !data.projectType && onStart) {
      onStart();
    }
    setData({ ...data, [field]: value });
  };

  // Auto-advance logic with 300ms delay
  useEffect(() => {
    if (step === 1 && data.projectType) {
      setTimeout(() => setStep(2), 300);
    }
  }, [data.projectType, step]);

  useEffect(() => {
    if (step === 2 && data.timeline && !needsTimelineClarification) {
      if (data.timeline === "not-sure") {
        setTimeout(() => setNeedsTimelineClarification(true), 300);
      } else {
        setTimeout(() => setStep(3), 300);
      }
    }
  }, [data.timeline, step, needsTimelineClarification]);

  const handleNext = () => {
    if (step === 3 && data.zipCode.length >= 5 && !isCheckingZip) {
      if (isColoradoZipCode(data.zipCode)) {
        setIsDisqualified(false);
        setIsCheckingZip(true);

        // 8-second loading animation
        setTimeout(() => {
          setIsCheckingZip(false);
          setStep(4);
        }, 8000);
      } else {
        setIsDisqualified(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 4) {
      setStep((step - 1) as QuizStep);
    }
  };

  const getProjectTypeLabel = (type: string): string => {
    switch (type) {
      case "interior":
        return "Interior painting";
      case "exterior":
        return "Exterior painting";
      case "both":
        return "Both interior & exterior";
      case "not-sure":
        return "Not sure yet";
      default:
        return "";
    }
  };

  const getTimelineLabel = (timeline: string): string => {
    switch (timeline) {
      case "asap":
        return "Right away";
      case "30-days":
        return "Within 30 days";
      case "1-3-months":
        return "1 to 3 months";
      case "not-sure":
        return "Not sure yet";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { firstName?: string; phone?: string; email?: string } =
      {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "Name is required";
    }

    const phoneDigits = data.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      newErrors.phone = "Phone is required";
    } else {
      const phoneValidation = isValidPhoneNumber(data.phone);
      if (!phoneValidation.valid) {
        newErrors.phone = phoneValidation.error || "Enter a valid phone number";
      }
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    const phoneDigits = data.phone.replace(/\D/g, "");

    const payload = {
      "contact.first_name": data.firstName,
      "contact.email": data.email || "",
      "contact.phone": phoneDigits,
      "contact.zip_code": data.zipCode,
      "contact.project_type": getProjectTypeLabel(data.projectType),
      "contact.timeline": getTimelineLabel(data.timeline),
      first_name: data.firstName,
      email: data.email || "",
      phone: phoneDigits,
      zip_code: data.zipCode,
      project_type: getProjectTypeLabel(data.projectType),
      timeline: getTimelineLabel(data.timeline),
    };

    console.log("Emerald Paints Quiz payload:", payload);

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Fire Facebook Pixel Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }

    const webhookUrl = "REPLACE_WITH_GHL_WEBHOOK_URL";

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((response) => {
        console.log(
          "GHL webhook response:",
          response.status,
          response.ok ? "OK" : "FAILED"
        );
      })
      .catch((err) => {
        console.error("GHL webhook error:", err);
      });
  };

  // OptionCard with vertical layout - EMERALD GREEN selected states
  const OptionCard = ({
    icon: Icon,
    label,
    selected,
    onClick,
    accentColor = "text-primary",
  }: {
    icon: React.ElementType;
    label: string;
    selected: boolean;
    onClick: () => void;
    accentColor?: string;
  }) => (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-1.5 p-3.5 sm:p-4 rounded-xl border-2 bg-white w-full min-h-[100px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group ${
        selected
          ? "border-primary bg-accent shadow-md"
          : "border-border hover:border-primary/50 shadow-sm"
      }`}
    >
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          selected ? "bg-primary" : "bg-muted group-hover:bg-muted/80"
        }`}
      >
        <Icon
          className={`w-5 h-5 transition-colors duration-200 ${
            selected ? "text-primary-foreground" : accentColor
          }`}
        />
      </div>

      <span
        className={`text-sm font-normal text-center leading-tight transition-colors duration-200 ${
          selected ? "text-primary font-medium" : "text-foreground"
        }`}
      >
        {label}
      </span>

      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </div>
      )}
    </button>
  );

  // Animation variants
  const cardVariants = {
    enter: { opacity: 0, y: 20, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  return (
    <div className="w-full max-w-lg">
      {/* Quiz Card - EMERALD GREEN border */}
      <div className="quiz-card-glass rounded-2xl shadow-quiz-glow p-5 sm:p-6 w-full border border-primary/20">
        {/* Progress Dots - Inside card - EMERALD GREEN */}
        {!isSubmitted && !isDisqualified && !timelineDisqualified && (
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4].map((dotStep) => (
              <div
                key={dotStep}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  dotStep <= step ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Project Type - Painting specific */}
          {step === 1 && !isSubmitted && (
            <motion.div
              key="step1"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-4 text-center leading-tight">
                What kind of painting project are you planning?
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <OptionCard
                  icon={Home}
                  label="Interior Painting"
                  selected={data.projectType === "interior"}
                  onClick={() => handleTileSelect("projectType", "interior")}
                  accentColor="text-primary"
                />
                <OptionCard
                  icon={Building}
                  label="Exterior Painting"
                  selected={data.projectType === "exterior"}
                  onClick={() => handleTileSelect("projectType", "exterior")}
                  accentColor="text-secondary"
                />
                <OptionCard
                  icon={ArrowLeftRight}
                  label="Both Interior & Exterior"
                  selected={data.projectType === "both"}
                  onClick={() => handleTileSelect("projectType", "both")}
                  accentColor="text-primary"
                />
                <OptionCard
                  icon={HelpCircle}
                  label="Not Sure Yet"
                  selected={data.projectType === "not-sure"}
                  onClick={() => handleTileSelect("projectType", "not-sure")}
                  accentColor="text-muted-foreground"
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Timeline */}
          {step === 2 &&
            !isSubmitted &&
            !needsTimelineClarification &&
            !timelineDisqualified && (
              <motion.div
                key="step2"
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-base sm:text-lg font-medium text-foreground mb-4 text-center leading-tight">
                  When are you hoping to get started?
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                  <OptionCard
                    icon={Zap}
                    label="Right Away"
                    selected={data.timeline === "asap"}
                    onClick={() => handleTileSelect("timeline", "asap")}
                    accentColor="text-red-600"
                  />
                  <OptionCard
                    icon={Calendar}
                    label="Within 30 Days"
                    selected={data.timeline === "30-days"}
                    onClick={() => handleTileSelect("timeline", "30-days")}
                    accentColor="text-primary"
                  />
                  <OptionCard
                    icon={CalendarClock}
                    label="1 to 3 Months"
                    selected={data.timeline === "1-3-months"}
                    onClick={() => handleTileSelect("timeline", "1-3-months")}
                    accentColor="text-primary"
                  />
                  <OptionCard
                    icon={Clock}
                    label="Not Sure Yet"
                    selected={data.timeline === "not-sure"}
                    onClick={() => handleTileSelect("timeline", "not-sure")}
                    accentColor="text-muted-foreground"
                  />
                </div>
                <button
                  onClick={handleBack}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go back
                </button>
              </motion.div>
            )}

          {/* Timeline Clarification - 60 day check */}
          {step === 2 &&
            needsTimelineClarification &&
            !timelineDisqualified &&
            !isSubmitted && (
              <motion.div
                key="timeline-clarification"
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
              >
                <div className="text-center mb-5">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    Quick Question
                  </h3>
                  <p className="text-base text-muted-foreground">
                    We're currently taking projects that can start within the
                    next 60 days.
                  </p>
                  <p className="text-base text-foreground font-medium mt-2">
                    Does that work for your timeline?
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <button
                    onClick={() => {
                      setNeedsTimelineClarification(false);
                      setData({ ...data, timeline: "1-3-months" });
                      setTimeout(() => setStep(3), 300);
                    }}
                    className="w-full p-4 rounded-xl border-2 border-primary bg-accent hover:shadow-lg transition-all text-left min-h-[44px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Yes, that works for me
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Continue to next step
                        </p>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setTimelineDisqualified(true);
                    }}
                    className="w-full p-4 rounded-xl border-2 border-border hover:border-muted-foreground/50 hover:shadow-md transition-all text-left min-h-[44px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          No, I need more time
                        </p>
                        <p className="text-xs text-muted-foreground">
                          I'm planning further out
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setNeedsTimelineClarification(false);
                    setData({ ...data, timeline: "" });
                  }}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1 min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go back
                </button>
              </motion.div>
            )}

          {/* Timeline Disqualification Screen - FULL DETAILS */}
          {timelineDisqualified && !isSubmitted && (
            <motion.div
              key="timeline-disqualified"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="py-4 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(27, 107, 58, 0.1)' }}
              >
                <Calendar className="w-7 h-7" style={{ color: '#1B6B3A' }} />
              </motion.div>

              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug">
                Thanks For Your Interest!
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-sm mx-auto">
                We're focusing on projects starting within 60 days right now.
                We'd love to help when you're ready!
              </p>

              <div className="bg-muted rounded-xl p-4 mb-4 text-left">
                <p className="text-xs font-semibold text-foreground mb-2">
                  Here's what to do:
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>
                      Save our number:{" "}
                      <strong className="text-foreground">(720) 447-5654</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>
                      Bookmark:{" "}
                      <strong className="text-foreground">
                        emeraldpaints.com
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>Reach out when your timeline is closer!</span>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
          )}

          {/* Step 3: ZIP Code */}
          {step === 3 && !isSubmitted && !isCheckingZip && !isDisqualified && (
            <motion.div
              key="step3"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-4 text-center leading-tight">
                What's your zip code?
              </h3>
              <div className="mb-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <Input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter ZIP code"
                    value={data.zipCode}
                    onChange={(e) =>
                      setData({
                        ...data,
                        zipCode: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="pl-10 h-12 text-base rounded-xl border-2 focus:border-primary"
                    maxLength={5}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go back
                </button>
                <Button
                  onClick={handleNext}
                  disabled={data.zipCode.length < 5}
                  variant="default"
                  size="lg"
                  className="px-6 h-12 min-h-[44px]"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ZIP Code Checking Loader - 8 second animation - EMERALD GREEN */}
          {isCheckingZip && !isSubmitted && !isDisqualified && (
            <motion.div
              key="checking-zip"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="py-8 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <div className="w-full h-full rounded-full border-4 border-gray-200 border-t-primary" />
              </motion.div>

              <CheckingMessages zipCode={data.zipCode} />
            </motion.div>
          )}

          {/* ZIP Code Disqualification Screen - FULL DETAILS */}
          {isDisqualified && !isSubmitted && (
            <motion.div
              key="disqualified"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="py-4 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FEFDFB' }}
              >
                <MapPin className="w-7 h-7" style={{ color: '#1B6B3A' }} />
              </motion.div>

              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug">
                We Only Serve Colorado
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-sm mx-auto">
                Thank you for your interest in Emerald Paints! Unfortunately, we
                currently only serve homeowners in Colorado.
              </p>

              <p className="text-sm text-muted-foreground mb-4">
                Think this is an error? Your ZIP code was:{" "}
                <strong className="text-foreground">{data.zipCode}</strong>
              </p>

              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
          )}

          {/* Step 4: Contact Form */}
          {step === 4 && !isSubmitted && (
            <motion.div
              key="step4"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              {/* Celebration Header with actual ZIP code */}
              <div className="text-center mb-4">
                <span className="text-2xl mb-1 block">🎉</span>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Congrats! Your Area ({data.zipCode}) Qualifies For The Home
                  Refresh Program!
                </h3>
                <p className="text-base text-muted-foreground leading-snug max-w-sm mx-auto">
                  Enter your info below to claim your free estimate and lock in
                  your 25% discount.
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-2.5 mb-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Name"
                      value={data.firstName}
                      onChange={(e) => {
                        setData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }));
                        if (errors.firstName)
                          setErrors({ ...errors, firstName: undefined });
                      }}
                      className={`pl-10 h-12 text-base rounded-xl border-2 transition-all ${
                        errors.firstName
                          ? "border-red-500 focus:border-red-500"
                          : "focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1 pl-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      inputMode="tel"
                      placeholder="(555) 123-4567"
                      value={data.phone}
                      onChange={(e) => {
                        setData((prev) => ({
                          ...prev,
                          phone: formatPhoneNumber(e.target.value),
                        }));
                        if (errors.phone)
                          setErrors({ ...errors, phone: undefined });
                      }}
                      className={`pl-10 pr-10 h-12 text-base rounded-xl border-2 transition-all ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "focus:border-primary"
                      }`}
                      maxLength={14}
                    />
                    {data.phone.replace(/\D/g, "").length === 10 &&
                      isValidPhoneNumber(data.phone).valid && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      )}
                  </div>
                  {errors.phone ? (
                    <p className="text-xs text-red-500 mt-1 pl-1">
                      {errors.phone}
                    </p>
                  ) : data.phone.replace(/\D/g, "").length === 10 &&
                    isValidPhoneNumber(data.phone).valid ? (
                    <p className="text-[10px] text-primary mt-1 pl-1">
                      ✓ Looks good!
                    </p>
                  ) : (
                    <p className="text-[10px] text-muted-foreground mt-1 pl-1">
                      📱 Please double-check your number so we can reach you
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={data.email}
                      onChange={(e) => {
                        setData((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email)
                          setErrors({ ...errors, email: undefined });
                      }}
                      className={`pl-10 h-12 text-base rounded-xl border-2 transition-all ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 pl-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button - Full width, EMERALD GREEN */}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full h-12 text-[15px] font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg min-h-[44px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get My Free Estimate"
                )}
              </Button>

              {/* Subtle Testimonial */}
              <div className="mt-3">
                <p className="text-xs text-muted-foreground/80 italic text-center leading-relaxed">
                  "Just finished our exterior with Emerald Paints — would
                  definitely recommend!"
                  <span className="text-muted-foreground/60 not-italic ml-1">
                    — Carlos M., Westminster
                  </span>
                </p>
              </div>

              {/* Trust Footer */}
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 text-[10px] text-muted-foreground pt-4 mt-4 border-t border-border/50">
                <span className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-2.5 h-2.5 text-primary" />
                  </div>
                  Secure
                </span>
                <span className="text-muted-foreground/50">·</span>
                <span>Licensed & Insured</span>
                <span className="text-muted-foreground/50">·</span>
                <span>No spam</span>
              </div>
            </motion.div>
          )}

          {/* Success Screen */}
          {isSubmitted && (
            <motion.div
              key="success"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="py-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 leading-snug">
                Awesome, {data.firstName.split(" ")[0]}—you're all set! 🎉
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-sm mx-auto">
                We'll be reaching out very soon to get more details on your
                project and schedule your free estimate. Talk soon!
              </p>

              <p className="text-base text-muted-foreground mb-6">
                In the meantime, feel free to check out our website:{" "}
                <a
                  href="https://emeraldpaints.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  emeraldpaints.com
                </a>
              </p>

              {/* Trust Footer */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border/50">
                <Shield className="w-3.5 h-3.5 text-primary" />
                Your information is secure
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
