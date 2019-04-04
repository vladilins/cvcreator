import { Component, OnInit } from "@angular/core";
import { ExperienceService } from "./experience.service";
import { Router } from "@angular/router";
import { Job } from "./experience.model";
import { Subscription } from "rxjs";
@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
  jobs: Job[];
  selectedExperience: Job;
  loaded: boolean = false;

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.experienceService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedExperience = {
          id: "",
          title: "",
          position: "",
          timeEnd: null,
          timeStart: null,
          tasks: ""
        };
      }
    });

    this.experienceService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.loaded = true;
    });
  }

  onSelect(job: Job) {
    this.experienceService.setFormJob(job);
    this.selectedExperience = job;
  }

  onDelete(job: Job) {
    if (confirm("Are you sure?")) {
      this.experienceService.deleteJob(job);
    }
  }

  goToExperienceCreate() {
    this.router.navigate(["/experience/create"]);
  }
}
