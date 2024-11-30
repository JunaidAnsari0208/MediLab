"use client";

import moment from "moment";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Calendar,
  ClipboardList,
  Clock,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function HospitalManagementSystemLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-600">
                  Streamline Your Hospital Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Efficient, secure, and user-friendly. Our system helps you
                  manage your hospital with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-600">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Appointment Scheduling
                </h3>
                <p className="text-gray-600">
                  Easily manage and schedule patient appointments.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ClipboardList className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Electronic Health Records
                </h3>
                <p className="text-gray-600">
                  Securely store and access patient records digitally.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Staff Management</h3>
                <p className="text-gray-600">
                  Efficiently manage hospital staff and their schedules.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Get insights with comprehensive analytics and reporting.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
                <p className="text-gray-600">
                  Stay informed with real-time updates and notifications.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Stethoscope className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Patient Care Management
                </h3>
                <p className="text-gray-600">
                  Improve patient care with comprehensive management tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600">
                  Book Your Appointment
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Schedule your visit with our experienced doctors quickly and
                  easily.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const date = formData.get("date") as string;
                    const selectedDate = moment(date);
                    const today = moment().startOf("day");

                    // Check if date is valid and in the future
                    if (!selectedDate.isValid()) {
                      alert("Please select a valid date.");
                      return;
                    }

                    if (selectedDate.isBefore(today)) {
                      alert("Please select a future date.");
                      return;
                    }
                    // Proceed with form submission
                    alert("Appointment booked successfully!");
                  }}
                >
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                      <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                      <SelectItem value="dr-williams">Dr. Williams</SelectItem>
                      <SelectItem value="dr-brown">Dr. Brown</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input name="date" type="date" placeholder="Select a date" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="10am">10:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                      <SelectItem value="4pm">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 text-white hover:bg-green-700"
                  >
                    Book Appointment
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600">
                  Ready to Transform Your Hospital Management?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of healthcare providers who have streamlined
                  their operations with MediCare.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 border-green-600"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-green-600 text-white hover:bg-green-700"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-green-600"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          © 2024 MediCare Hospital Management System. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
