export const import_modules = `

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './dialogs/add/add.dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';

import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EditComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteComponent } from './dialogs/delete/delete.dialog.component';


import {DataService} from './services/data.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 

import {$component_nameRoutingModule} from "./$component_name-routing.module"
import {$component_nameComponent} from "./$component_name.component"
`

export const declaration_import_and_export  = `

@NgModule({
    declarations: [
        $component_nameComponent,
      AddComponent,
  
     
      EditComponent,
      DeleteComponent,
      
    ],
    imports: [
      CommonModule,
      $component_nameRoutingModule,
      HttpClientModule,
      MatDialogModule,
      FormsModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatSortModule,
      MatTableModule,
      MatToolbarModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      SharedModule,
      MatFormFieldModule,
      MatAutocompleteModule
    ],
    providers: [
      DataService
    ],
  })
  export class $component_nameModule { }

`