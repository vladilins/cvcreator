import { Component, OnInit } from "@angular/core";
import { Education } from "./education.model";
import { EducationService } from "./education.service";
import { Router } from "@angular/router";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  educations: Education[];
  selectedEducation: Education;
  loaded: boolean = false;

  closeResult: string;

  constructor(
    private educationService: EducationService,
    private router: Router,
    private modalService: NgbModal
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

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
