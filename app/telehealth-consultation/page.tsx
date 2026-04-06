import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";
import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/lib/sample-data";
import Link from "next/link";

export default function TelehealthConsultationPage() {
  const benefits = [
    { icon: Clock, title: "Same-Day Visits", desc: "Book and see a doctor today — no waiting weeks for an appointment." },
    { icon: DollarSign, title: "Affordable Rates", desc: "Video visits starting at $39 — often cheaper than insurance co-pays." },
    { icon: Shield, title: "HIPAA Secure", desc: "Your privacy is protected with end-to-end encrypted video visits." },
    { icon: Video, title: "HD Video Quality", desc: "Crystal-clear video consultations from any device, anywhere." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-10 mb-14 text-center">
        <Badge className="bg-teal-100 text-teal-700 mb-4">📹 Telehealth Consultations</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          See a Real Doctor Online
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Board-certified physicians available for video consultations — from the comfort of your home. No commute, no waiting rooms, no hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/online-doctor">Find a Doctor Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/symptom-checker">Check Symptoms First</Link>
          </Button>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Telehealth?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-14 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Telehealth Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Choose a Doctor", desc: "Browse available physicians by specialty, ratings, and availability." },
            { step: "2", title: "Book a Time", desc: "Select a time that works for you — same-day options available." },
            { step: "3", title: "Connect via Video", desc: "Join your secure video call at appointment time from any device." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Can Telehealth Treat?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Cold & Flu", "UTI", "Allergies", "Skin Conditions",
            "Mental Health", "Prescription Renewal", "Chronic Disease Management", "Sports Injuries",
            "Digestive Issues", "Ear Infections", "Anxiety & Depression", "Sleep Disorders",
          ].map((condition) => (
            <div key={condition} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3">
              <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{condition}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.slice(0, 3).map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/online-doctor">View All Doctors</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
