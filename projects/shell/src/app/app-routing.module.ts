import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'app-1',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfApp1',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './MfModule',
      }).then((m) => m.App1Module),
  },
  {
    path: 'app-2',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfApp2',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './MfModule',
      }).then((m) => m.App2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
