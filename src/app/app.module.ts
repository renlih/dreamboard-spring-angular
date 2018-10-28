import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardEditComponent } from "./board/board-list/board-edit/board-edit.component";
import { DreamListComponent } from './dreams/dream-list/dream-list.component';
import { DreamItemComponent } from './dreams/dream-list/dream-item/dream-item.component';
import { DreamDetailComponent } from './dreams/dream-detail/dream-detail.component';
import { DreamsComponent } from './dreams/dreams.component';
import { DropdownDirective } from "./shared/dropdown.directive";
import { BoardService } from "./board/board.service";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { DreamService } from "./dreams/dream.service";
import { DreamsResolver } from "./dreams/dreams-resolver.service";
import { DreamResolver } from "./dreams/dream-resolver.service";
import { HttpModule } from "@angular/http";
import { DreamEditComponent } from "./dreams/dream-edit/dream-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardListComponent,
    BoardEditComponent,
    DreamListComponent,
    DreamItemComponent,
    DreamDetailComponent,
    DreamEditComponent,
    DreamsComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [BoardService, DreamService, DreamsResolver, DreamResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
