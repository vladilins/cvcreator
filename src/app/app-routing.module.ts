import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsCreateComponent } from "./skills/skills-create/skills-create.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "education", component: EducationComponent },
  { path: "education/:postId", component: EducationComponent },
  { path: "skills", component: SkillsComponent },
  { path: "skills/create", component: SkillsCreateComponent },
  { path: "skills/:postId", component: EducationComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "experience/:postId", component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
