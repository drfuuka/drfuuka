type ExperienceItem = {
  title: string;
  description: string[] | string;
  startDate: string;
  endDate: string;
};

export type TGalleriesItem = {
  url: string;
  title: string;
  description?: string;
};

export type TExperienceTimeline = {
  companyName: string;
  experiences: ExperienceItem[];
  location: string;
  locationType: string;
  employmentType: string;
  skill?: string[];
};

export type TProjectTimeline = {
  projectName: string;
  description: string;
  companyName: string;
  startDate: string;
  endDate: string;
  galleries: TGalleriesItem[];
  skill?: string[];
};
