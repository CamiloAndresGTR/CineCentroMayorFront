import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { EditUserComponent } from './components/auth/edit-user/edit-user.component';
import { MoviesComponent } from './components/movies/movies/movies.component';
import { CreateMovieComponent } from './components/movies/create-movie/create-movie.component';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { FindMovieComponent } from './components/movies/find-movie/find-movie.component';
import { ScheduleComponent } from './components/movies/schedule/schedule.component';
import { TicketBuyComponent } from './components/movies/ticket-buy/ticket-buy.component';
import { CreateBillboardComponent } from './components/billboard/create-billboard/create-billboard.component';
import { BillboardComponent } from './components/billboard/billboard/billboard.component';
import { EditBillboardComponent } from './components/billboard/edit-billboard/edit-billboard.component';
import { RatingsComponent } from './components/movies/ratings/ratings.component';
import { ScheduleListComponent } from './components/movies/schedule-list/schedule-list.component';
import { CreateScheduleComponent } from './components/movies/create-schedule/create-schedule.component';
import { EditScheduleComponent } from './components/movies/edit-schedule/edit-schedule.component';
import { CreateRoomComponent } from './components/billboard/create-room/create-room.component';
import { EditRoomComponent } from './components/billboard/edit-room/edit-room.component';
import { UserTypesComponent } from './components/auth/user/user-types/user-types.component';
import { CreateUserTypeComponent } from './components/auth/user/create-user-type/create-user-type.component';
import { EditUserTypeComponent } from './components/auth/user/edit-user-type/edit-user-type.component';
import { GendersComponent } from './components/movies/genders/genders.component';
import { CreateGenderComponent } from './components/movies/create-gender/create-gender.component';
import { EditGenderComponent } from './components/movies/edit-gender/edit-gender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EditUserComponent,
    MoviesComponent,
    CreateMovieComponent,
    EditMovieComponent,
    FindMovieComponent,
    ScheduleComponent,
    TicketBuyComponent,
    CreateBillboardComponent,
    BillboardComponent,
    EditBillboardComponent,
    RatingsComponent,
    ScheduleListComponent,
    CreateScheduleComponent,
    EditScheduleComponent,
    CreateRoomComponent,
    EditRoomComponent,
    UserTypesComponent,
    CreateUserTypeComponent,
    EditUserTypeComponent,
    GendersComponent,
    CreateGenderComponent,
    EditGenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
