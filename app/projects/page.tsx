"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/project-data";

// Mock data for projects
const allProjects = projects;
// const allProjects = [
//   {
//     id: 1,
//     title: "EcoTrack",
//     description: "A sustainability tracking app for businesses",
//     category: "Environment",
//     likes: 42,
//     forSale: true,
//     price: 5000,
//     currency: "USD",
//   },
//   {
//     id: 2,
//     title: "MindfulAI",
//     description: "AI-powered meditation and mindfulness assistant",
//     category: "Health & Wellness",
//     likes: 38,
//     forSale: false,
//   },
//   // Add more mock projects here
// ];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState(allProjects);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProjects = allProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase()) ||
        project.category.toLowerCase().includes(term.toLowerCase())
    );
    setProjects(filteredProjects);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow"
        />
        <Button>Search</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{project.description}</p>
              {project.forSale && (
                <Badge variant="secondary" className="mb-2">
                  For Sale: {project.price} {project.currency}
                </Badge>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">👍 {project.likes}</Button>
              <Link href={`/projects/${project.id}`}>
                <Button>Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
