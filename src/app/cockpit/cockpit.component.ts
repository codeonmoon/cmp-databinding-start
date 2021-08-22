import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //serverElements = [];
  //newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverInput: HTMLInputElement) {
    console.log(serverInput.value);
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
