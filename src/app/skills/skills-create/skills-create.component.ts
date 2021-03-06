import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Skill } from "../skill.model";
import { SkillsService } from "../skills.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-skills-create",
  templateUrl: "./skills-create.component.html",
  styleUrls: ["./skills-create.component.css"]
})
export class SkillsCreateComponent implements OnInit {
  // newSkill = "No content";
  private mode = "create";
  private postId: string;

  constructor(
    public skillsService: SkillsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onAddSkill(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.skillsService.addSkill(
      form.value.title,
      form.value.age,
      this.generateId()
    );
    form.resetForm();
  }

  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
