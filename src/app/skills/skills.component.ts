import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  // skills = [{ title: "HTML5" }, { title: "CSS3" }, { title: "JS" }];
  skills = [];
  constructor() {}

  ngOnInit() {}
}
