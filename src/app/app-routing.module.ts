import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/auth/edit-user/edit-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { CreateMovieComponent } from './components/movies/create-movie/create-movie.component';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { MoviesComponent } from './components/movies/movies/movies.component';
import { FindMovieComponent } from './components/movies/find-movie/find-movie.component';
import { ScheduleComponent } from './components/movies/schedule/schedule.component';
import { TicketBuyComponent } from './components/movies/ticket-buy/ticket-buy.component';
import { BillboardComponent } from './components/billboard/billboard/billboard.component';
import { CreateBillboardComponent } from './components/billboard/create-billboard/create-billboard.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'create-movie', component: CreateMovieComponent },
  { path: 'edit-movie', component: EditMovieComponent },
  { path: 'find-movie', component: FindMovieComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'ticket-buy', component: TicketBuyComponent },
  { path: 'billboard', component: BillboardComponent },
  { path: 'create-billboard', component: CreateBillboardComponent },
  { path: 'edit-billboard', component: EditBillboardComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
  { path: 'create-schedule', component: CreateScheduleComponent },
  { path: 'edit-schedule', component: EditScheduleComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'edit-room', component: EditRoomComponent },
  { path: 'user-types', component: UserTypesComponent },
  { path: 'create-user-type', component: CreateUserTypeComponent },
  { path: 'edit-user-type', component: EditUserTypeComponent },
  { path: 'genders', component: GendersComponent },
  { path: 'create-gender', component: CreateGenderComponent },
  { path: 'edit-gender', component: EditGenderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
