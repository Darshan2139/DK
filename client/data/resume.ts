// Import configuration from the easy-to-edit config file
import { portfolioConfig } from '../portfolio-config';

export const resumeData = {
  personal: {
    ...portfolioConfig.personal,
    profileImage: portfolioConfig.personal.profileImages.main,
  },

  about: portfolioConfig.about,

  education: portfolioConfig.education.map(edu => ({
    ...edu,
    cgpa: edu.score,
  })),

  projects: portfolioConfig.projects,

  technologies: portfolioConfig.technologies,

  coCurricular: portfolioConfig.coCurricular,

  activitiesStats: portfolioConfig.coCurricularStats,

  ui: {
    hero: {
      rotatingTexts: portfolioConfig.ui?.hero?.rotatingTexts ?? [
        'Computer Engineering Student',
        'Web Developer',
        'Problem Solver',
        'Creative Thinker'
      ]
    },
    technologies: {
      titles: {
        coreSkills: portfolioConfig.ui?.technologies?.titles?.coreSkills ?? 'Core Skills',
        frameworks: portfolioConfig.ui?.technologies?.titles?.frameworks ?? 'Frameworks & Libraries',
        tools: portfolioConfig.ui?.technologies?.titles?.tools ?? 'Tools & Technologies',
      },
      headings: {
        proficiency: portfolioConfig.ui?.technologies?.headings?.proficiency ?? 'Skill Proficiency',
        stack: portfolioConfig.ui?.technologies?.headings?.stack ?? 'Technology Stack',
      }
    },
    projects: {
      moreProjectsText: portfolioConfig.ui?.projects?.moreProjectsText ?? 'More projects coming soon...'
    }
  },

  certifications: portfolioConfig.certifications
};

export type ResumeData = typeof resumeData;
