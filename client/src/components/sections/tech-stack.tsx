import { FaMicrochip } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { 
  SiReact,
  SiPython,
  SiDocker,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
  SiDotnet,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiTerraform,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiNextdotjs,
  SiGatsby,
  SiGrafana,
  SiSwift,
  SiKotlin,
  SiAmazonwebservices,
  SiGooglecloud,
  SiMetasploit,
  SiSelenium,
  SiJest,
  SiRaspberrypi,
  SiUml
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const techStack = [
  // Custom Software Development
  { icon: SiReact, name: "React", color: "text-blue-500" },
  { icon: SiAngular, name: "Angular", color: "text-red-600" },
  { icon: SiPython, name: "Python", color: "text-yellow-300" },
  { icon: SiDotnet, name: "Dotnet", color: "text-purple-600" },

  // AI Software Development
  { icon: SiTensorflow, name: "TensorFlow", color: "text-blue-600" },
  { icon: SiPytorch, name: "PyTorch", color: "text-orange-500" },
  { icon: SiScikitlearn, name: "Scikit‑learn", color: "text-blue-400" },
  { icon: SiOpencv, name: "OpenCV", color: "text-blue-900" },

  // Web Development
  { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
  { icon: SiVuedotjs, name: "Vue.js", color: "text-green-500" },
  { icon: SiGatsby, name: "Gatsby", color: "text-purple-600" },

  // Data Management and Analysis
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-800" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: SiGrafana, name: "Grafana", color: "text-orange-400" },

  // Mobile App Development
  { icon: SiReact, name: "React Native", color: "text-blue-500" },
  { icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
  { icon: SiSwift, name: "Swift", color: "text-orange-400" },
  { icon: SiKotlin, name: "Kotlin", color: "text-purple-700" },

  // DevOps and Cloud Solutions
  { icon: SiAmazonwebservices, name: "AWS", color: "text-orange-600" },
  { icon: VscAzure, name: "Azure", color: "text-blue-700" },
  { icon: SiGooglecloud, name: "Google Cloud", color: "text-blue-400" },
  { icon: SiDocker, name: "Docker", color: "text-blue-500" },
  { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-700" },
  { icon: SiTerraform, name: "Terraform", color: "text-green-400" },

  // Cybersecurity Services
  { icon: SiMetasploit, name: "Metasploit", color: "text-red-700" },
  { icon: MdSecurity, name: "Nmap", color: "text-blue-700" },

  // Software Testing Services
  { icon: SiSelenium, name: "Selenium", color: "text-blue-700" },
  { icon: SiJest, name: "Jest", color: "text-red-600" },

  // Healthcare Software Development
  { icon: SiPython, name: "Python", color: "text-yellow-300" },

  // IoT Development Services
  { icon: SiRaspberrypi, name: "Raspberry Pi", color: "text-green-700" },
  { icon: FaMicrochip, name: "IoT", color: "text-blue-500" },

  // IT Consulting
  // Consulting is methodology‑driven, so less tool‑specific icons available in si
  { icon: SiUml, name: "UML", color: "text-gray-600" }

];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">We Cover Your Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
