export interface CvDetail {
  label: string;
  value: string;
  url?: string;
}

export interface CvSubentry {
  title: string;
  meta?: string;
  details?: CvDetail[];
}

export interface CvTimelineEntry {
  title: string;
  organization?: string;
  organizationUrl?: string;
  location?: string;
  period?: string;
  details?: CvDetail[];
  subentries?: CvSubentry[];
}

export interface CvData {
  meta: {
    subtitle: string;
    updated: string;
  };
  education: CvTimelineEntry[];
  researchExperience: CvTimelineEntry[];
  teachingExperience: CvTimelineEntry[];
  patents: CvTimelineEntry[];
}
