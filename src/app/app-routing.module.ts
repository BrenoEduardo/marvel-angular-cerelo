import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsSelectComponent } from './pages/champions-select/champions-select.component';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: '', component: ChampionsSelectComponent },
  { path: 'letsPlay', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
