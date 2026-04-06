import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  available: boolean;
  price: number;
}

export default function DoctorCard({ id, name, specialty, experience, rating, reviews, available, price }: DoctorCardProps) {
  const initials = name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("");
  const colors = ["bg-blue-500", "bg-teal-500", "bg-purple-500", "bg-green-500", "bg-orange-500"];
  const colorIndex = id % colors.length;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`${colors[colorIndex]} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <Badge variant="secondary" className="mt-1 text-xs">{specialty}</Badge>
            <p className="text-sm text-gray-500 mt-1">{experience} experience</p>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="text-sm font-medium ml-1">{rating}</span>
              <span className="text-xs text-gray-500">({reviews})</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <Badge className={available ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-gray-100 text-gray-600 hover:bg-gray-100"}>
              {available ? "Available Now" : "Next: Today 3pm"}
            </Badge>
            <p className="text-lg font-bold text-blue-600 mt-1">${price}/visit</p>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/online-doctor">Book Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
