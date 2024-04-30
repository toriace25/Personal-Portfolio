export interface NamedResource {
  name: string;
}
export interface NameLocationResource extends NamedResource {
  location: string;
}

export interface DateRangeResource {
  start: string;
  end?: string;
}

export interface ProjectResource extends NamedResource {
  description: string;
  sourceCodeLink: string;
  imageSrc: string;
  imageAlt: string;
}
