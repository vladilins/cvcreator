import { Component, OnInit } from "@angular/core";
import { ExperienceService } from "../experience.service";

@Component({
  selector: "app-experience-create",
  templateUrl: "./experience-create.component.html",
  styleUrls: ["./experience-create.component.css"]
})
export class ExperienceCreateComponent implements OnInit {
  id: string;
  position: string;
  title: string;
  timeStart: any;
  timeEnd: any;
  tasks: string;

  isNew: boolean = true;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.experienceService.selectedExperience.subscribe(exp => {
      if (exp.id !== null) {
        this.isNew = false;
        this.id = exp.id;
        this.position = exp.position;
        this.title = exp.title;
        this.timeStart = exp.timeStart;
        this.timeEnd = exp.timeEnd;
        this.tasks = exp.tasks;
      }
    });
  }

  onSubmit() {
    // Check if new log
    if (this.isNew) {
      // Create a new log
      const newExperience = {
        id: this.generateId(),
        position: this.position,
        title: this.title,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        tasks: this.tasks
      };
      // Add log
      this.experienceService.addJob(newExperience);
    } else {
      // Create log to be updated
      const updatedExperience = {
        id: this.id,
        position: this.position,
        title: this.title,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        tasks: this.tasks
      };
      // Update log
      this.experienceService.updateJob(updatedExperience);
    }

    // Clear state
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = "";
    this.position = "";
    this.title = "";
    this.timeStart = "";
    this.timeEnd = "";
    this.tasks = "";
    this.experienceService.clearState();
  }

  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
