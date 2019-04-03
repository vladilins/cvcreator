import { Component, OnInit, OnDestroy } from "@angular/core";
import { ExperienceService } from "./experience.service";
import { Router } from "@angular/router";
import { Job } from "./experience.model";
import { Subscription } from "rxjs";
@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  private jobsSub: Subscription;
  constructor(
    public experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.jobs = this.experienceService.getJobs();
    this.jobsSub = this.experienceService
      .getJobUpdateListener()
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs;
      });
  }

  ngOnDestroy() {
    this.jobsSub.unsubscribe();
  }
  goToJobsCreate() {
    this.router.navigate(["/experience/create"]);
  }
}
