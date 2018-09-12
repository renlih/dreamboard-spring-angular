import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dream-item',
  templateUrl: './dream-item.component.html',
  styleUrls: ['./dream-item.component.css']
})
export class DreamItemComponent implements OnInit {
  @Input() dreamInfo;

  ngOnInit() {

  }

}
