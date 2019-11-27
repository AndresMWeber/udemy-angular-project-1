import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newServerName: string;
  newServerContent: string;
  @Output() serverCreated = new EventEmitter<{ newServerName: string, newServerContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ newServerName: string, newServerContent: string }>();
  @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() { }

  onAddServer(serverNameInput) {
    this.serverCreated.emit({
      newServerName: serverNameInput.value,
      newServerContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverContentInput) {
    this.blueprintCreated.emit({
      newServerName: this.newServerName,
      newServerContent: this.serverContentInput.nativeElement.value
    });
  }
}
