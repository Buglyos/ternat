import { Routes } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams';
import { MembersComponent } from './pages/members/members';
import { TeamsAddComponent } from './pages/teams-add/teams-add';
import { TeamsEditComponent } from './pages/teams-edit/teams-edit';
import { MembersAddComponent } from './pages/members-add/members-add';

export const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/add', component: TeamsAddComponent },
  { path: 'teams/edit/:id', component: TeamsEditComponent },

  { path: 'members', component: MembersComponent },
  { path: 'members/add', component: MembersAddComponent },

  { path: '', redirectTo: 'teams', pathMatch: 'full' }
];
