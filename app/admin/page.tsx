"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data for pending projects
const initialProjects = [
  { id: 1, title: "Project A", description: "Description for Project A" },
  { id: 2, title: "Project B", description: "Description for Project B" },
  { id: 3, title: "Project C", description: "Description for Project C" },
];

export default function AdminDashboard() {
  const [pendingProjects, setPendingProjects] = useState(initialProjects);

  const handleApprove = (id: number) => {
    // In a real application, you would send an API request to approve the project
    setPendingProjects(pendingProjects.filter((project) => project.id !== id));
  };

  const handleReject = (id: number) => {
    // In a real application, you would send an API request to reject the project
    setPendingProjects(pendingProjects.filter((project) => project.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="space-y-4">
        {pendingProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button
                onClick={() => handleApprove(project.id)}
                variant="outline"
              >
                Approve
              </Button>
              <Button
                onClick={() => handleReject(project.id)}
                variant="destructive"
              >
                Reject
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
