import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DahsbordComponent } from './dahsbord/dahsbord.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PreferenceComponent } from './preference/preference.component';

const routes: Routes = [
  {path: 'connextion', component: ConnexionComponent},
  {path: '', component: HomeComponent},
  {path: 'inscription', component: RegisterComponent},
  {path: 'dashboard', component: DahsbordComponent,
    children: [
      { path: 'Timetable', component: TimetableComponent},
      { path: 'Preference', component: PreferenceComponent}]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
