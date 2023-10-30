import { Component, OnDestroy, OnInit } from '@angular/core';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.scss']
})
export class LessonEditFormComponent implements OnInit,OnDestroy{
  faHome = faHome;
  ngOnInit(): void {
    console.log("LessonEditFormComponent.ngOnInit()");
  }
  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }
  constructor(private router: Router, private userSettingsService:
    UserSettingsService) {}
  onClickSubmit() {
    this.userSettingsService.lastLessonId = 1234;
    // could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list']).then(res => {})
  }

}
