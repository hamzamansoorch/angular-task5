import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path: 'form', component: FormComponent
  },
  {
    path: 'display-component', component: DisplayComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent, DisplayComponentComponent]