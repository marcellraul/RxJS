import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', //
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(
        (m) => m.HomeModule
      ),
  },
  {
    path: "rick-morty",
    loadChildren: () =>
      import("./pages/rick-morty/rick-morty.module").then(
        (m) => m.RickMortyModule
      ),
  },
  {
    path: "albums",
    loadChildren: () =>
      import("./pages/albums/albums.module").then(
        (m) => m.AlbumsModule
      ),
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./pages/forms/formsActive.module").then(
        (m) => m.FormsActiveModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then(
        (m) => m.AuthModule
      ),
  },
 
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
