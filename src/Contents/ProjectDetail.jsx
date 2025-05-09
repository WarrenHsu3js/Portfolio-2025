import { useParams, Link } from "react-router-dom";
import { projects } from "./projectData";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <div className="p-10 text-center text-gray-600">找不到這個專案</div>;
  }

  return (
    <div className="pt-20 px-6 max-w-3xl mx-auto text-gray-800">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-contain mb-6 border rounded"
      />
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.tools}</p>
      <pre className="whitespace-pre-wrap text-lg leading-relaxed mb-6">
        {project.description}
      </pre>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-3 py-1 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
      >
        ← 回首頁
      </Link>
    </div>
  );
}
