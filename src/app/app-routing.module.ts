import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'rockets',
    loadChildren: () =>
      import('./rockets/rockets.module').then((m) => m.RocketsModule),
  },
  {
    path: 'ships',
    loadChildren: () =>
      import('./ships/ships.module').then((m) => m.ShipsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
