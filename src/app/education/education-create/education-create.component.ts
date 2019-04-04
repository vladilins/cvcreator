import { Component, OnInit } from "@angular/core";
import { EducationService } from "../education.service";
import { Education } from "../education.model";
@Component({
  selector: "app-education-create",
  templateUrl: "./education-create.component.html",
  styleUrls: ["./education-create.component.css"]
})
export class EducationCreateComponent implements OnInit {
  id: string;
  type: any;
  title: string;
  timeStart: any;
  timeEnd: any;
  about: string;

  isNew: boolean = true;

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.educationService.selectedEducation.subscribe(edu => {
      if (edu.id !== null) {
        this.isNew = false;
        this.id = edu.id;
        this.type = edu.type;
        this.title = edu.title;
        this.timeStart = edu.timeStart;
        this.timeEnd = edu.timeEnd;
        this.about = edu.about;
      }
    });
  }

  onSubmit() {
    // Check if new log
    if (this.isNew) {
      // Create a new log
      const newEducation = {
        id: this.generateId(),
        type: this.type,
        title: this.title,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        about: this.about
      };
      // Add log
      this.educationService.addEducation(newEducation);
    } else {
      // Create log to be updated
      const updEducation = {
        id: this.id,
        type: this.type,
        title: this.title,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        about: this.about
      };
      // Update log
      this.educationService.updatEeducation(updEducation);
    }

    // Clear state
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = "";
    this.type = "";
    this.title = "";
    this.timeStart = "";
    this.timeEnd = "";
    this.about = "";
    this.educationService.clearState();
  }

  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
