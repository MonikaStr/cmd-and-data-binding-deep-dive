import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  
  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output()
  blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
  }

  onBlueprintCreated() {

  }


}
