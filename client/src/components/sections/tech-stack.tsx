import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiJavascript,
  SiTypescript,
  SiAmazon,
  SiDocker,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
  SiDotnet,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTerraform
} from "react-icons/si";

const techStack = [
  { icon: SiReact, name: "React", color: "text-blue-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiPython, name: "Python", color: "text-yellow-500" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: SiAmazon, name: "AWS", color: "text-orange-500" },
  { icon: SiDocker, name: "Docker", color: "text-blue-600" },
  { icon: SiAngular, name: "Angular", color: "text-red-600" },
  { icon: SiVuedotjs, name: "Vue.js", color: "text-green-600" },
  { icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
  { icon: SiDotnet, name: ".NET", color: "text-purple-600" },
  { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { icon: SiRedis, name: "Redis", color: "text-red-500" },
  { icon: SiTerraform, name: "Terraform", color: "text-purple-500" },
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">We Cover Your Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're well-versed in most programming languages, tools, and frameworks essential for innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 tech-icon cursor-pointer"
              >
                <Icon className={`text-4xl ${tech.color}`} />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
