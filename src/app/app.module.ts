import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { SkillsCreateComponent } from "./skills/skills-create/skills-create.component";
import { FormsModule } from "@angular/forms";
import { EducationCreateComponent } from "./education/education-create/education-create.component";

import { ExperienceCreateComponent } from "./experience/experience-create/experience-create.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    HomeComponent,
    SkillsCreateComponent,
    EducationCreateComponent,

    ExperienceCreateComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
