import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'view', component: ViewComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}