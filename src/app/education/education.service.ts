import { Injectable } from "@angular/core";
import { Education } from "./education.model";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EducationService {
  educations: Education[];

  private educationSource = new BehaviorSubject<Education>({
    id: null,
    type: null,
    title: null,
    timeEnd: null,
    timeStart: null,
    about: null
  });
  selectedEducation = this.educationSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.educations = [
    //   {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
    //   {id: '3', text: 'Added educations component', date: new Date('12/27/2017 12:00:23')}
    // ]

    this.educations = [];
  }

  getEducations(): Observable<Education[]> {
    if (localStorage.getItem("educations") === null) {
      this.educations = [];
    } else {
      this.educations = JSON.parse(localStorage.getItem("educations"));
    }

    return of(this.educations);
  }

  setFormEducation(education: Education) {
    this.educationSource.next(education);
  }

  addEducation(education: Education) {
    this.educations.unshift(education);

    // Add to local storage
    localStorage.setItem("educations", JSON.stringify(this.educations));
  }

  updatEeducation(education: Education) {
    this.educations.forEach((cur, index) => {
      if (education.id === cur.id) {
        this.educations.splice(index, 1);
      }
    });
    this.educations.unshift(education);

    // Update local storage
    localStorage.setItem("educations", JSON.stringify(this.educations));
  }

  deleteEducation(education: Education) {
    this.educations.forEach((cur, index) => {
      if (education.id === cur.id) {
        this.educations.splice(index, 1);
      }
    });

    // Delete from local storage
    localStorage.setItem("educations", JSON.stringify(this.educations));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
