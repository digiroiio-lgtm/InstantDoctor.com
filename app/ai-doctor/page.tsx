import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Shield, Star, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AIDoctorPage() {
  const benefits = [
    { icon: Clock, title: "Available 24/7", desc: "Get medical guidance any time of day or night, no appointment needed." },
    { icon: Zap, title: "Instant Analysis", desc: "AI analyzes thousands of medical conditions in seconds." },
    { icon: Shield, title: "Evidence-Based", desc: "Guidance based on current medical literature and clinical guidelines." },
    { icon: Brain, title: "Learns from Context", desc: "Understands your complete symptom picture for accurate assessment." },
    { icon: Star, title: "Highly Accurate", desc: "Validated against real clinical outcomes with 94%+ accuracy." },
    { icon: CheckCircle, title: "Physician Reviewed", desc: "AI models trained and reviewed by licensed medical professionals." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="text-center py-14 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl mb-14 px-6">
        <Badge className="bg-blue-100 text-blue-700 mb-4">🤖 AI-Powered Healthcare</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet Your AI Doctor
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Powered by advanced medical AI trained on millions of clinical cases. Get instant, reliable symptom analysis without waiting rooms or expensive co-pays.
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/symptom-checker">Try AI Symptom Checker</Link>
        </Button>
      </section>

      <section className="mb-14">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose AI Medical Guidance?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-14 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI vs. Traditional Care</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 font-semibold text-gray-700">Feature</th>
                <th className="text-center py-3 font-semibold text-blue-600">InstantDoctor AI</th>
                <th className="text-center py-3 font-semibold text-gray-500">Traditional Care</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["Response Time", "Instant", "Days to weeks"],
                ["Availability", "24/7/365", "Business hours"],
                ["Cost", "Free / Low cost", "$150-$300+"],
                ["Wait Time", "None", "Days to weeks"],
                ["Initial Guidance", "✅ Excellent", "✅ Excellent"],
                ["Physical Exam", "❌ Not available", "✅ Available"],
                ["Prescriptions", "Via physician", "✅ Available"],
              ].map(([feature, ai, trad]) => (
                <tr key={feature}>
                  <td className="py-3 text-gray-700 font-medium">{feature}</td>
                  <td className="py-3 text-center text-blue-700">{ai}</td>
                  <td className="py-3 text-center text-gray-500">{trad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="text-center">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/symptom-checker">Start Free Symptom Check</Link>
        </Button>
      </div>
    </div>
  );
}
