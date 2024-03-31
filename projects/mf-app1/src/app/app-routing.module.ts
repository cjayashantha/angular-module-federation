import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./app1.module').then((m) => m.App1Module),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
