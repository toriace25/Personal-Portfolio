import Link from "next/link";
import Image from "next/image";
import Text from "@/app/ui/text";
import { ProjectResource } from "@/app/lib/definitions";

interface Props {
  project: ProjectResource;
}

const Project = ({ project }: Props) => {
  return (
    <Link
      className="flex h-48 w-64 flex-col items-center justify-between rounded-md border border-violet-500 p-2 hover:bg-violet-100 md:h-56 md:w-80 lg:h-60"
      href={project.sourceCodeLink}
    >
      <Image
        priority
        src={project.imageSrc}
        height={100}
        width={100}
        alt={project.imageAlt}
        className="h-2/5"
      />
      <Text>{project.name}</Text>
      <Text>{project.description}</Text>
    </Link>
  );
};

export default Project;
