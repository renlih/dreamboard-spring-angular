import { Component, OnInit } from '@angular/core';
import { Dream } from "./dream.model";
import { DreamService } from "./dream.service";
import { ActivatedRoute, Data, Params } from "@angular/router";
import { DreamResolver } from "./dream-resolver.service";

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
  selectedDream: Dream;
  editMode: boolean = false;
  newMode: boolean = false;

  constructor(private dreamService: DreamService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          // app-routing.module.ts => dream: DreamResolver
          this.selectedDream = data['dream'];

          if( data['editMode'] ){
            this.editMode = true;
          }else{
            this.editMode = false;
          }

          if( data['newMode'] ){
            this.newMode = true;
          }else{
            this.newMode = false;
          }
        }
      );

    this.route.params
      .subscribe(
        (params: Params) => {
          //this.editMode = params['dreamId'] != null;
        }
      );

  }

}
