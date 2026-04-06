"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Video, MessageSquare, Pill } from "lucide-react";
import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/lib/sample-data";

export default function OnlineDoctorPage() {
  const [search, setSearch] = useState("");

  const filtered = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Doctor</h1>
        <p className="text-gray-500">Connect with board-certified physicians online — same day appointments available</p>
      </div>

      <div className="relative max-w-lg mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search by name or specialty..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Tabs defaultValue="video" className="mb-8">
        <TabsList>
          <TabsTrigger value="video" className="gap-2">
            <Video className="w-4 h-4" /> Video Visit — $39
          </TabsTrigger>
          <TabsTrigger value="chat" className="gap-2">
            <MessageSquare className="w-4 h-4" /> Chat — $19
          </TabsTrigger>
          <TabsTrigger value="rx" className="gap-2">
            <Pill className="w-4 h-4" /> Prescription — $15
          </TabsTrigger>
        </TabsList>

        {["video", "chat", "rx"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-10">No doctors found matching your search.</p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
