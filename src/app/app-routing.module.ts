import { EditorComponent } from './components/editor/editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/editor/editor.module').then((m) => m.EditorModule),

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
