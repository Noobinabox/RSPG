import { Component, OnInit, Input } from '@angular/core';
import { Phase } from 'src/app/interfaces/phase';

@Component({
  selector: 'app-phase-details',
  templateUrl: './phase-details.component.html',
  styleUrls: ['./phase-details.component.css']
})
export class PhaseDetailsComponent implements OnInit {
  @Input() phase: Phase;

  constructor() { }

  ngOnInit() {
  }

}
