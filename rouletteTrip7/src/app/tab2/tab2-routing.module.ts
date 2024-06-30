import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab2/card',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'card', component: CardComponent,
      },
      {
        path: 'list', component: ListComponent
      },
      {
        path: '',
        redirectTo: '/tabs/tab2/card',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'card', component: CardComponent,
  // },
  // {
  //   path: 'list', component: ListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
