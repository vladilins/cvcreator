import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Skill } from "../skill.model";
import { SkillsService } from "../skills.service";

@Component({
  selector: "app-skills-create",
  templateUrl: "./skills-create.component.html",
  styleUrls: ["./skills-create.component.css"]
})
export class SkillsCreateComponent {
  // newSkill = "No content";

  constructor(public skillsService: SkillsService) {}

  onAddSkill(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.skillsService.addSkill(form.value.title);
    form.resetForm();
  }
}
