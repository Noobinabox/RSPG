import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { PhaseDetailsComponent } from './quest-details/phase-details/phase-details.component';
import { MobDetailsComponent } from './quest-details/mob-details/mob-details.component';
import { ItemDetailsComponent } from './quest-details/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    QuestDetailsComponent,
    QuestListComponent,
    PhaseDetailsComponent,
    MobDetailsComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
