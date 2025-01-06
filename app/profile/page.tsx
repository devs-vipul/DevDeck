"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user data
const userData = {
  name: "John Doe",
  email: "john@example.com",
  projects: [
    { id: 1, title: "EcoTrack", status: "Approved" },
    { id: 2, title: "MindfulAI", status: "Pending" },
  ],
  savedProjects: [
    { id: 3, title: "TechInnovate" },
    { id: 4, title: "GreenEnergy" },
  ],
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>{userData.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">{userData.name}</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="projects">Your Projects</TabsTrigger>
              <TabsTrigger value="saved">Saved Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <ul className="space-y-4">
                {userData.projects.map((project) => (
                  <li
                    key={project.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {project.title}
                    </Link>
                    <span
                      className={
                        project.status === "Approved"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }
                    >
                      {project.status}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="saved">
              <ul className="space-y-4">
                {userData.savedProjects.map((project) => (
                  <li key={project.id} className="border-b pb-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/submit">Submit New Project</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
