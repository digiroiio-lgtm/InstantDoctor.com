import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm">
                +
              </div>
              <span className="font-bold text-white text-lg">
                InstantDoctor<span className="text-blue-400">.ai</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              AI-powered medical guidance and telehealth consultations available 24/7.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-800 rounded-md p-2">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>HIPAA Compliant Platform</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/symptom-checker", label: "Symptom Checker" },
                { href: "/online-doctor", label: "Find a Doctor" },
                { href: "/prescription-renewal", label: "Prescriptions" },
                { href: "/lab-analyzer", label: "Lab Results" },
                { href: "/ai-doctor", label: "AI Doctor" },
                { href: "/telehealth-consultation", label: "Telehealth" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "HIPAA Notice",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 InstantDoctor.ai. All rights reserved.</p>
          <p className="text-center">
            ⚠️ Not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
