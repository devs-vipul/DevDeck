"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bookmark, Home, PlusCircle, Zap } from "lucide-react";
import projects from "@/data/project-data";

// Mock data for recent and saved projects
// const recentProjects = [
//   { id: 1, title: "EcoTrack" },
//   { id: 2, title: "MindfulAI" },
// ];

const recentProjects = projects;

// const savedProjects = [
//   { id: 3, title: "TechInnovate" },
//   { id: 4, title: "GreenEnergy" },
// ];

const savedProjects = projects;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ShadcnSidebar className="border-r">
      <SidebarTrigger className="lg:hidden" />
      <SidebarHeader>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/submit">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Submit Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/projects">
                    <Zap className="mr-2 h-4 w-4" />
                    Explore Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recent Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentProjects.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton asChild>
                    <Link href={`/projects/${project.id}`}>
                      {project.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Saved Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {savedProjects.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton asChild>
                    <Link href={`/projects/${project.id}`}>
                      <Bookmark className="mr-2 h-4 w-4" />
                      {project.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
