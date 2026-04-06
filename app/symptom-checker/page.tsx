"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User, AlertTriangle, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  analysis?: Analysis;
}

interface Analysis {
  possibleCauses: string[];
  riskLevel: "Low" | "Medium" | "High" | "Emergency";
  nextSteps: string[];
  selfCare: string[];
  whenToSeeDoctor: string;
}

function getMockAnalysis(input: string): Analysis {
  const lower = input.toLowerCase();

  if (lower.includes("chest pain") || lower.includes("shortness of breath") || lower.includes("difficulty breathing") || lower.includes("heart attack")) {
    return {
      possibleCauses: ["Cardiac event", "Pulmonary embolism", "Pneumothorax", "Severe angina"],
      riskLevel: "Emergency",
      nextSteps: ["Call 911 immediately", "Do not drive yourself", "Chew aspirin if not allergic"],
      selfCare: ["Sit upright and try to stay calm", "Loosen tight clothing"],
      whenToSeeDoctor: "⚠️ SEEK EMERGENCY CARE IMMEDIATELY — Call 911 or go to the nearest ER.",
    };
  }

  if (lower.includes("fever") || lower.includes("flu") || lower.includes("cold") || lower.includes("cough") || lower.includes("congestion") || lower.includes("sore throat")) {
    return {
      possibleCauses: ["Common cold (rhinovirus)", "Influenza", "Strep throat", "Sinusitis"],
      riskLevel: "Low",
      nextSteps: ["Rest and stay hydrated", "Monitor temperature", "Consider OTC medications"],
      selfCare: ["Drink plenty of fluids (water, broth, tea)", "Get adequate sleep (8+ hours)", "Use a humidifier", "Honey and lemon for sore throat"],
      whenToSeeDoctor: "See a doctor if fever exceeds 103°F, symptoms last more than 10 days, or breathing becomes difficult.",
    };
  }

  if (lower.includes("headache") || lower.includes("migraine") || lower.includes("head pain")) {
    return {
      possibleCauses: ["Tension headache", "Migraine", "Dehydration", "Sinusitis", "Hypertension"],
      riskLevel: "Medium",
      nextSteps: ["Rest in a quiet, dark room", "Take OTC pain reliever", "Stay hydrated"],
      selfCare: ["Apply cold or warm compress", "Massage temples gently", "Avoid screens and bright lights", "Drink water"],
      whenToSeeDoctor: "Seek care if headache is the worst of your life, sudden onset, or accompanied by fever/stiff neck/vision changes.",
    };
  }

  if (lower.includes("stomach") || lower.includes("abdominal") || lower.includes("nausea") || lower.includes("vomiting") || lower.includes("diarrhea")) {
    return {
      possibleCauses: ["Gastroenteritis", "Food poisoning", "IBS", "Gastritis", "Appendicitis (if lower right)"],
      riskLevel: "Medium",
      nextSteps: ["Monitor symptoms", "Stay hydrated with clear fluids", "Avoid solid foods temporarily"],
      selfCare: ["Follow BRAT diet (Bananas, Rice, Applesauce, Toast)", "Sip water or electrolyte drinks", "Rest", "Avoid dairy and spicy foods"],
      whenToSeeDoctor: "See a doctor if pain is severe/worsening, blood in stool/vomit, symptoms persist > 2 days, or signs of dehydration.",
    };
  }

  if (lower.includes("rash") || lower.includes("skin") || lower.includes("itch") || lower.includes("hives")) {
    return {
      possibleCauses: ["Contact dermatitis", "Allergic reaction", "Eczema", "Hives (urticaria)", "Heat rash"],
      riskLevel: "Low",
      nextSteps: ["Identify and avoid potential triggers", "Apply OTC hydrocortisone cream", "Take antihistamine if allergic"],
      selfCare: ["Keep area clean and dry", "Avoid scratching", "Apply cool compress", "Use fragrance-free moisturizer"],
      whenToSeeDoctor: "Seek care if rash spreads rapidly, is accompanied by fever, or you have difficulty breathing (anaphylaxis risk).",
    };
  }

  return {
    possibleCauses: ["Multiple possible causes — further evaluation recommended", "Viral infection", "Stress-related symptoms", "Nutritional deficiency"],
    riskLevel: "Medium",
    nextSteps: ["Monitor symptoms for 24-48 hours", "Keep a symptom diary", "Consider scheduling a consultation"],
    selfCare: ["Rest adequately", "Stay hydrated", "Eat balanced meals", "Avoid strenuous activity"],
    whenToSeeDoctor: "If symptoms persist more than 3 days, worsen significantly, or you develop new concerning symptoms, consult a physician.",
  };
}

const riskColors = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-orange-100 text-orange-700",
  Emergency: "bg-red-100 text-red-700",
};

const promptChips = [
  "I have a headache and fever",
  "Chest pain and shortness of breath",
  "Stomach pain for 2 days",
  "Rash on my arm",
  "Cough that won&apos;t go away",
];

export default function SymptomCheckerPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content: "Hello! I&apos;m your AI health assistant. Please describe your symptoms and I&apos;ll help analyze them. Remember, this is for informational purposes only and not a substitute for professional medical advice.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const analysis = getMockAnalysis(text);
    const aiMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: `Based on your symptoms, I&apos;ve completed an initial assessment. Please review the analysis below.`,
      analysis,
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsTyping(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Symptom Checker</h1>
        <p className="text-gray-500 mt-1">Describe your symptoms for instant AI-powered health guidance</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              <div className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant" ? "bg-blue-600" : "bg-gray-200"
                }`}>
                  {message.role === "assistant" ? (
                    <Bot className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>

              {message.analysis && (
                <div className="ml-11 mt-3 space-y-3">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">Assessment Results</h3>
                        <Badge className={riskColors[message.analysis.riskLevel]}>
                          {message.analysis.riskLevel === "Emergency" && "⚠️ "}
                          Risk Level: {message.analysis.riskLevel}
                        </Badge>
                      </div>

                      {message.analysis.riskLevel === "Emergency" && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-red-700 text-sm font-medium">{message.analysis.whenToSeeDoctor}</p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Possible Causes</h4>
                          <ul className="space-y-1">
                            {message.analysis.possibleCauses.map((cause) => (
                              <li key={cause} className="text-xs text-gray-600 flex items-center gap-1.5">
                                <ChevronRight className="w-3 h-3 text-blue-500" />
                                {cause}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended Steps</h4>
                          <ul className="space-y-1">
                            {message.analysis.nextSteps.map((step) => (
                              <li key={step} className="text-xs text-gray-600 flex items-center gap-1.5">
                                <ChevronRight className="w-3 h-3 text-teal-500" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Self-Care Tips</h4>
                          <ul className="space-y-1">
                            {message.analysis.selfCare.map((tip) => (
                              <li key={tip} className="text-xs text-gray-600 flex items-center gap-1.5">
                                <ChevronRight className="w-3 h-3 text-green-500" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {message.analysis.riskLevel !== "Emergency" && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">When to See a Doctor</h4>
                            <p className="text-xs text-gray-600">{message.analysis.whenToSeeDoctor}</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                          <Link href="/online-doctor">
                            Talk to a Doctor Now →
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-4 py-2 border-t border-gray-100 flex flex-wrap gap-2">
          {promptChips.map((chip) => (
            <button
              key={chip}
              onClick={() => sendMessage(chip)}
              className="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full px-3 py-1.5 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 flex gap-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder="Describe your symptoms..."
            className="resize-none min-h-[48px] max-h-[120px]"
            rows={1}
          />
          <Button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            className="bg-blue-600 hover:bg-blue-700 self-end"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        ⚠️ This tool provides general health information only. It is not a substitute for professional medical advice, diagnosis, or treatment.
      </p>
    </div>
  );
}
