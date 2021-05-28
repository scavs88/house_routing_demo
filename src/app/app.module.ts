import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HouselistComponent } from './houselist/houselist.component';
import { HousedetailComponent } from './housedetail/housedetail.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:'house', component:HouselistComponent },
  {path:'house/:id', component:HousedetailComponent },
  {path:'', redirectTo:'/house', pathMatch:'full'},
  {path: '**',redirectTo: '/house', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HouselistComponent,
    HousedetailComponent,
    HeaderComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
