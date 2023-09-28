export const import_routing = `
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {$component_nameComponent} from "./$component_name.component"
`
export const path_routing = `
const routes: Routes = [
    { path: '', component: $component_nameComponent }
  
  ];
`
export const export_routing = `
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class $component_nameRoutingModule { }
`