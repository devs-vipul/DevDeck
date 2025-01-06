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

// Mock data for projects
const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A sustainability tracking app for businesses",
    category: "Environment",
    votes: 42,
  },
  {
    id: 2,
    title: "MindfulAI",
    description: "AI-powered meditation and mindfulness assistant",
    category: "Health & Wellness",
    votes: 38,
  },
  // Add more mock projects here
];

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Discover Innovative Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">👍 {project.votes}</Button>
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
