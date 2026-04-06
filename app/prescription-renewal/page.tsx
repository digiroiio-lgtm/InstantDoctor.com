import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ClipboardList, Send, Info } from "lucide-react";
import Link from "next/link";

const categories = [
  "Allergy", "Birth Control", "Blood Pressure", "Diabetes",
  "Mental Health", "Thyroid", "Cholesterol", "Other",
];

const steps = [
  { icon: ClipboardList, title: "Submit Request", desc: "Fill out a short health questionnaire about your current medications." },
  { icon: CheckCircle, title: "Doctor Review", desc: "A licensed physician reviews your request — usually within 1 hour." },
  { icon: Send, title: "Prescription Sent", desc: "Your prescription is sent electronically to your preferred pharmacy." },
];

export default function PrescriptionRenewalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <Badge className="bg-teal-100 text-teal-700 mb-4">💊 Prescription Services</Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Renew Your Prescription Online
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl">
          No waiting rooms. Renew common prescriptions in as little as 1 hour with a licensed physician review.
        </p>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Medication Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Card key={cat} className="hover:shadow-md hover:border-blue-300 transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <span className="font-medium text-gray-700">{cat}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10 flex gap-4">
        <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-1">AI-Assisted Triage</h3>
          <p className="text-blue-800 text-sm">
            Our AI pre-screens renewal requests to ensure patient safety. Controlled substances, new prescriptions, and certain medications require a full physician consultation. Not all prescriptions can be renewed online.
          </p>
        </div>
      </div>

      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
        <Link href="/symptom-checker">Start Prescription Request</Link>
      </Button>
    </div>
  );
}
