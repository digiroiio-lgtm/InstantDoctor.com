import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, FileText, Pill, Video, MessageSquare } from "lucide-react";
import { consultations, prescriptions } from "@/lib/sample-data";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { icon: Video, label: "Total Consultations", value: "3", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Pill, label: "Active Prescriptions", value: "2", color: "text-teal-600", bg: "bg-teal-100" },
    { icon: FileText, label: "Lab Reports", value: "5", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: Calendar, label: "Next Appointment", value: "Jan 20", color: "text-orange-600", bg: "bg-orange-100" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">My Health Dashboard</h1>
        <p className="text-gray-500">Welcome back. Here&apos;s your health overview.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className={`${stat.bg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Consultations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {consultations.map((c) => (
              <div key={c.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-9 h-9 rounded-full flex items-center justify-center">
                    {c.type === "Video Visit" ? (
                      <Video className="w-4 h-4 text-blue-600" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">{c.doctor}</p>
                    <p className="text-xs text-gray-500">{c.specialty} · {c.date}</p>
                    {c.diagnosis && <p className="text-xs text-gray-400 mt-0.5">{c.diagnosis}</p>}
                  </div>
                </div>
                <Badge
                  className={
                    c.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }
                >
                  {c.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2" asChild>
              <Link href="/online-doctor">Book New Consultation</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Prescriptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {prescriptions.map((rx) => (
              <div key={rx.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{rx.medication}</p>
                    <p className="text-sm text-gray-500">{rx.dosage} · {rx.refills} refills left</p>
                    <p className="text-xs text-gray-400 mt-1">Prescribed by {rx.prescribedBy}</p>
                    <p className="text-xs text-gray-400">Expires: {rx.expiryDate}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">{rx.status}</Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2" asChild>
              <Link href="/prescription-renewal">Renew Prescription</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Health Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Blood Pressure", value: "120/80", unit: "mmHg", status: "Normal" },
                { label: "Heart Rate", value: "72", unit: "bpm", status: "Normal" },
                { label: "Weight", value: "165", unit: "lbs", status: "Stable" },
                { label: "BMI", value: "24.1", unit: "", status: "Normal" },
              ].map((metric) => (
                <div key={metric.label} className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value}
                    {metric.unit && <span className="text-sm font-normal text-gray-500 ml-1">{metric.unit}</span>}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
                  <Badge className="mt-2 bg-green-100 text-green-700 text-xs">{metric.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
