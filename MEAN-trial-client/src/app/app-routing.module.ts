import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { NotesComponent } from './notes/notes.component'

const routes: Routes = [
  { path: 'user', component:  UserComponent},
  { path: 'note', component:  NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
