import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
// import { SkillsService } from "../skills.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./skills-create.component.html",
  styleUrls: ["./skills-create.component.css"]
})
export class SkillsCreateComponent {
  newSkill = "No content";

  // constructor(public skillsService: SkillsService) {}

  onAddSkills(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.newSkill = "The new Skill";
    form.resetForm();
  }
}
