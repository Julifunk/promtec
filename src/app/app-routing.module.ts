import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from './components/card-view/card-view.component';
import { EmptyViewComponent } from './components/empty-view/empty-view.component';

const routes: Routes = [
  {
    path:'',
    component: EmptyViewComponent
  },
  {
    path:'cards',
    component: CardViewComponent
  },
  {
    path:'no-cards',
    component: EmptyViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
