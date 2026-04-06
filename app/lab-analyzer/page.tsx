import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

const labResults = [
  { test: "Glucose (Fasting)", value: "105 mg/dL", range: "70-99 mg/dL", status: "High" },
  { test: "Total Cholesterol", value: "185 mg/dL", range: "< 200 mg/dL", status: "Normal" },
  { test: "HDL Cholesterol", value: "58 mg/dL", range: "> 40 mg/dL", status: "Normal" },
  { test: "LDL Cholesterol", value: "115 mg/dL", range: "< 130 mg/dL", status: "Normal" },
  { test: "Triglycerides", value: "145 mg/dL", range: "< 150 mg/dL", status: "Normal" },
  { test: "HbA1c", value: "5.8%", range: "< 5.7%", status: "High" },
  { test: "TSH", value: "2.1 mIU/L", range: "0.4-4.0 mIU/L", status: "Normal" },
  { test: "Vitamin D", value: "22 ng/mL", range: "30-100 ng/mL", status: "Low" },
];

const statusColors: Record<string, string> = {
  Normal: "bg-green-100 text-green-700",
  High: "bg-red-100 text-red-700",
  Low: "bg-yellow-100 text-yellow-700",
};

export default function LabAnalyzerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lab Result Analyzer</h1>
        <p className="text-gray-500">Upload your lab results for instant AI-powered interpretation</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
            <CardContent className="p-12 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Upload Lab Results</h3>
              <p className="text-gray-500 text-sm mb-4">Drag &amp; drop your PDF or image, or click to browse</p>
              <Button variant="outline">Choose File</Button>
              <p className="text-xs text-gray-400 mt-4">Supports PDF, JPG, PNG up to 10MB</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                Sample Analysis
                <Badge className="bg-blue-100 text-blue-700">AI Analyzed</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500 mb-4">
                <p><strong>Patient:</strong> John Doe</p>
                <p><strong>Date:</strong> January 15, 2024</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-600 font-medium">Test</th>
                      <th className="text-left py-2 text-gray-600 font-medium">Value</th>
                      <th className="text-left py-2 text-gray-600 font-medium">Range</th>
                      <th className="text-left py-2 text-gray-600 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labResults.map((row) => (
                      <tr key={row.test} className="border-b border-gray-100">
                        <td className="py-2 text-gray-700">{row.test}</td>
                        <td className="py-2 font-medium">{row.value}</td>
                        <td className="py-2 text-gray-500 text-xs">{row.range}</td>
                        <td className="py-2">
                          <Badge className={`text-xs ${statusColors[row.status]}`}>{row.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> AI Interpretation
              </h4>
              <p className="text-sm text-blue-800 mb-3">
                Your results show slightly elevated glucose and HbA1c, suggesting pre-diabetic range. Vitamin D is below optimal range. All other values are within normal limits.
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> Consider dietary changes to reduce glucose</li>
                <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> Supplement Vitamin D (consult physician for dosage)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Cholesterol levels are healthy</li>
              </ul>
            </CardContent>
          </Card>

          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/online-doctor">Discuss Results with a Doctor</Link>
          </Button>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-8">
        ⚠️ AI analysis is for informational purposes only and should not replace professional medical interpretation.
      </p>
    </div>
  );
}
