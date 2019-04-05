import { Component, OnInit } from "@angular/core";
import { ExperienceService } from "./experience.service";
import { Router } from "@angular/router";
import { Job } from "./experience.model";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
  jobs: Job[];
  selectedExperience: Job;
  loaded: boolean = false;

  closeResult: string;

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private modalService: NgbModal
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

  goToJobCreate() {
    this.router.navigate(["/experience/create"]);
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
