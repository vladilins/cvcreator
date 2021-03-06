import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsCreateComponent } from "./skills/skills-create/skills-create.component";
import { ExperienceCreateComponent } from "./experience/experience-create/experience-create.component";
import { EducationCreateComponent } from "./education/education-create/education-create.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "education", component: EducationComponent },
  { path: "education/create", component: EducationCreateComponent },
  { path: "education/create/:id", component: EducationCreateComponent },
  { path: "skills", component: SkillsComponent },
  { path: "skills/create", component: SkillsCreateComponent },
  { path: "skills/:postId", component: EducationComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "experience/create", component: ExperienceCreateComponent },
  { path: "experience/:postId", component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
