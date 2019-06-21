import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import Quests from '../../assets/quests.json';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { QuestInfo } from '../interfaces/quest-info.js';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {
  quests: QuestInfo[] = Quests;
  @Output() quest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  UpdateQuestDisplay(object, el: HTMLElement)
  {
    this.quest = object;
  }
}
