import { Component, OnInit } from "@angular/core";
import { Education } from "./education.model";
import { EducationService } from "./education.service";
import { Router } from "@angular/router";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  educations: Education[];
  selectedEducation: Education;
  loaded: boolean = false;

  constructor(
    private educationService: EducationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.educationService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedEducation = {
          id: "",
          title: "",
          type: "",
          timeEnd: null,
          timeStart: null,
          about: ""
        };
      }
    });

    this.educationService.getEducations().subscribe(educations => {
      this.educations = educations;
      this.loaded = true;
    });
  }

  onClear() {
    this.educationService.clearState();
  }

  onSelect(education: Education) {
    this.educationService.setFormEducation(education);
    this.selectedEducation = education;
  }

  onDelete(education: Education) {
    if (confirm("Are you sure?")) {
      this.educationService.deleteEducation(education);
    }
  }

  goToEducationCreate() {
    this.router.navigate(["/education/create"]);
  }
}
