import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path: 'Home',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'Professional-Summary',
        title: 'Professional Summary',
        component: ProfessionalSummaryComponent,
    },
    {
        path: 'Skills',
        title: 'Skills',
        component: SkillsComponent,
    },
    {
        path: 'Education',
        title: 'Education',
        component: EducationComponent,
    },
    {
        path: 'Professional-Experience',
        title: 'Professional Experience',
        component: ProfessionalExperienceComponent,
    },
    {
        path: 'Certifications',
        title: 'Certifications',
        component: CertificationsComponent,
    },
    {
        path: 'Projects',
        title: 'Projects',
        component: ProjectsComponent,
    },
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
];
