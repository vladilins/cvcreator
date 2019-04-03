import { Injectable } from "@angular/core";
import { Job } from "./experience.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExperienceService {
  private jobs: Job[] = [];
  private jobsUpdated = new Subject<Job[]>();

  constructor() {}

  getJobs() {
    return [...this.jobs];
  }

  getJobUpdateListener() {
    return this.jobsUpdated.asObservable();
  }

  addJob(
    title: string,
    timeStart: number,
    timeEnd: number,
    position: string,
    tasks: string
  ) {
    const job: Job = {
      title: title,
      timeStart: timeStart,
      timeEnd: timeEnd,
      position: position,
      tasks: tasks
    };
    this.jobs.push(job);
    this.jobsUpdated.next([...this.jobs]);
  }
}
