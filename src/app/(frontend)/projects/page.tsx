import ProjectCard from '@/components/ProjectCard';
import { mockProjects } from '@/lib/mockData';

export default function ProjectsPage() {
  const projects = mockProjects;
  const totalDocs = projects.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
            New Development Projects
          </h1>
          <p className="text-gray-600">
            {totalDocs} {totalDocs === 1 ? 'project' : 'projects'} available
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              No projects available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
