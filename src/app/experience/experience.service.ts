import { Injectable } from "@angular/core";
import { Job } from "./experience.model";
import { Subject, BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExperienceService {
  jobs: Job[];

  private experienceSource = new BehaviorSubject<Job>({
    id: null,
    title: null,
    timeStart: null,
    timeEnd: null,
    position: null,
    tasks: null
  });
  selectedExperience = this.experienceSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.jobs = [];
  }

  getJobs(): Observable<Job[]> {
    if (localStorage.getItem("jobs") === null) {
      this.jobs = [];
    } else {
      this.jobs = JSON.parse(localStorage.getItem("jobs"));
    }

    return of(this.jobs);
  }

  setFormJob(job: Job) {
    this.experienceSource.next(job);
  }

  addJob(job: Job) {
    this.jobs.unshift(job);

    // Add to local storage
    localStorage.setItem("jobs", JSON.stringify(this.jobs));
  }

  updateJob(job: Job) {
    this.jobs.forEach((cur, index) => {
      if (job.id === cur.id) {
        this.jobs.splice(index, 1);
      }
    });
    this.jobs.unshift(job);

    // Update local storage
    localStorage.setItem("jobs", JSON.stringify(this.jobs));
  }

  deleteJob(job: Job) {
    this.jobs.forEach((cur, index) => {
      if (job.id === cur.id) {
        this.jobs.splice(index, 1);
      }
    });

    // Delete from local storage
    localStorage.setItem("jobs", JSON.stringify(this.jobs));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
