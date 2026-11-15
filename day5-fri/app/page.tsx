import projects from "@/data/projects.json";
import ProjectsView from "@/components/ProjectsView";
import type { Project } from "@/lib/types";

// This is a Server Component: it runs on the server and passes data down as props.
export default function Home() {
  return (
    <main>
      <h1>Research Projects (training data)</h1>
      <ProjectsView initialProjects={projects as Project[]} />
    </main>
  );
}
