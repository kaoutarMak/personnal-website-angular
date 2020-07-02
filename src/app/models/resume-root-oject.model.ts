import { Certif } from './certif.model';
import { Skill } from './skill.model';
import { Training } from './training.model';
import { Project } from './project.model';
import { Resume } from './resume.model';
import { Profil } from './profil.model';
export class ResumeRootOject {
  profil: Profil;
  resume: Resume;
  projects: Project[];
  trainings: Training[];
  skills: Skill[];
  certifs: Certif[];

  constructor() {

  }
}
