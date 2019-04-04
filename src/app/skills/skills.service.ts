import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Skill } from "./skill.model";

@Injectable({ providedIn: "root" })
export class SkillsService {
  private skills: Skill[] = [];
  private skillsUpdated = new Subject<Skill[]>();

  getSkills() {
    return [...this.skills];
  }

  getSkillUpdateListener() {
    return this.skillsUpdated.asObservable();
  }

  addSkill(title: string, age: number) {
    const skill: Skill = { title: title, age: age };
    this.skills.push(skill);
    this.skillsUpdated.next([...this.skills]);
  }
}
