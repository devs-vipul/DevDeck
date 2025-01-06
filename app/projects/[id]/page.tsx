"use client";

import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Chat from "@/components/chat";

// Mock function to fetch project details
const getProjectDetails = (id: string) => {
  // In a real application, you would fetch this data from your backend
  return {
    id,
    title: "EcoTrack",
    description:
      "EcoTrack is a comprehensive sustainability tracking app designed for businesses of all sizes. Our platform enables companies to monitor, analyze, and improve their environmental impact across various metrics such as energy consumption, waste management, and carbon emissions.",
    category: "Environment",
    likes: 42,
    dislikes: 10,
    website: "https://ecotrack.example.com",
    github: "https://github.com/ecotrack",
    linkedin: "https://linkedin.com/company/ecotrack",
    contactEmail: "info@ecotrack.example.com",
  };
};

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const project = getProjectDetails(resolvedParams.id);

  return (
    <div className="max-w-4xl space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{project.title}</CardTitle>
          <CardDescription>{project.category}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{project.description}</p>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-4">
            <Button variant="outline">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {project.likes}
            </Button>
            <Button variant="outline">
              <ThumbsDown className="mr-2 h-4 w-4" />
              {project.dislikes}
            </Button>
          </div>
          <Chat projectId={project.id} projectTitle={project.title} />
        </CardFooter>
      </Card>
    </div>
  );
}
