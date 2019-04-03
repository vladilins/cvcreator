import { Component, OnInit } from "@angular/core";
import { ExperienceService } from "../experience.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-experience-create",
  templateUrl: "./experience-create.component.html",
  styleUrls: ["./experience-create.component.css"]
})
export class ExperienceCreateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor(public experienceService: ExperienceService) {}

  onAddJobs(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.experienceService.addJob(
      form.value.title,
      form.value.timeStart,
      form.value.timeEnd,
      form.value.position,
      form.value.tasks
    );
    form.resetForm();
  }
}
