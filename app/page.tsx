import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Brain,
  Clock,
  FileText,
  Heart,
  MessageCircle,
  Pill,
  Shield,
  Star,
  Stethoscope,
  Users,
  Video,
  Zap,
} from "lucide-react";
import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/lib/sample-data";

export default function Home() {
  const howItWorks = [
    { icon: MessageCircle, step: "1", title: "Describe Your Symptoms", desc: "Tell our AI about how you're feeling in plain language." },
    { icon: Brain, step: "2", title: "AI Analysis", desc: "Our medical AI analyzes your symptoms against thousands of conditions." },
    { icon: Activity, step: "3", title: "Get Guidance", desc: "Receive personalized insights, possible causes, and next steps." },
    { icon: Video, step: "4", title: "See a Doctor", desc: "Connect with a licensed physician if needed — same day." },
  ];

  const useCases = [
    { icon: Zap, title: "Cold & Flu", desc: "Get instant guidance for common cold and flu symptoms.", color: "text-blue-500" },
    { icon: Heart, title: "Chronic Conditions", desc: "Monitor and manage ongoing health conditions.", color: "text-red-500" },
    { icon: Pill, title: "Prescription Renewal", desc: "Renew prescriptions without an in-person visit.", color: "text-teal-500" },
    { icon: FileText, title: "Lab Results", desc: "Understand your lab reports with AI-powered explanations.", color: "text-purple-500" },
    { icon: Brain, title: "Mental Health", desc: "Access mental health support and counseling services.", color: "text-orange-500" },
    { icon: Stethoscope, title: "Urgent Care", desc: "Know when to seek emergency care vs. home treatment.", color: "text-green-500" },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-blue-500 text-white border-blue-400 mb-6">
            🩺 AI-Powered Medical Guidance
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your AI Doctor.
            <br />
            <span className="text-teal-300">Instant Medical Guidance.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get AI-powered symptom analysis 24/7 and connect with licensed physicians online.
            Fast, affordable, and accessible healthcare at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-base font-semibold px-8">
              <Link href="/symptom-checker">Check My Symptoms</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base font-semibold px-8">
              <Link href="/online-doctor">Talk to a Doctor</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> HIPAA Compliant</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Available 24/7</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4" /> 50,000+ Patients</div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4" /> 4.9/5 Rating</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg">Get answers in minutes, not days</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-blue-600 font-bold text-sm mb-2">Step {item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Can Help With</h2>
            <p className="text-gray-500 text-lg">Comprehensive care for all your health needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <useCase.icon className={`w-10 h-10 ${useCase.color} mb-4`} />
                  <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-500 text-sm">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Doctors</h2>
            <p className="text-gray-500 text-lg">Board-certified physicians available now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/online-doctor">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-amber-50 border-t border-amber-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-800 text-sm">
            ⚠️ <strong>Medical Disclaimer:</strong> InstantDoctor.ai provides informational content only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </section>
    </>
  );
}
