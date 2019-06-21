import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phase } from '../interfaces/phase';
import { QuestInfo } from '../interfaces/quest-info';
import Items from '../../assets/items.json';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})
export class QuestDetailsComponent implements OnInit {
  @Input() quest: QuestInfo;
  equipment: Item[] = Items;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.MergeItemsAndMobsToQuest();
  }

  MergeItemsAndMobsToQuest() {
    if (this.quest.items !== undefined) {
      this.quest.items.forEach((item) => {
        var result = this.equipment.filter((eq) => {
          return eq.id === item.id ? eq : undefined;
        });
        item = (result[0] !== undefined) ? result[0] : null;
        console.log(item);
      })
    }
    else {
      return;
    }
  }

}
