export const imports_ts = `
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {DataService} from './services/data.service';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {DataSource} from '@angular/cdk/collections';
import {$component_name} from './models/$component_name';

import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';



import {AddComponent} from './dialogs/add/add.dialog.component';
import {EditComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteComponent} from "./dialogs/delete/delete.dialog.component"


import { TranslationLoaderService } from "@shared/services/translation/translation-loader.service";


import { locale as localFrench } from "./i18n/fr";

`
export const component_ts = `
@Component({
    selector: 'ngsocle-$component_name',
    templateUrl: './$component_name.component.html',
    styleUrls: ['./$component_name.component.scss']
  })
  
  export class $component_nameComponent implements OnInit {
  
`
export const columns_ts = `
displayedColumns =$columns_table
`
export const ts_data = `
exampleDatabase: DataService | null;
dataSource: ExampleDataSource | null;
index: number;
id: number;



//translation things 

constructor(public httpClient: HttpClient,
            public dialogService: MatDialog,
            public dataService: DataService,
           private translationLoaderService: TranslationLoaderService,
            ) {


              this.translationLoaderService.loadTranslations(localFrench);

                            }

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild('filter',  {static: true}) filter: ElementRef;

ngOnInit() {


  this.loadData();

}

reload() {
  this.loadData();
}

openAddDialog() {
  const dialogRef = this.dialogService.open(AddComponent, {
    data: {issue: {} }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // After dialog is closed we're doing frontend updates
      // For add we're just pushing a new row inside DataService
      this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
      this.refreshTable();
    }
  });
}

startEdit(i: number, id: number,codeType:string,codeListeMere:string,codeRubrique:string,libelle:string,valeur1:string) {
  this.id = id;
  // index row is used just for debugging proposes and can be removed
  this.index = i;
  let news = this.dataSource.filteredData.filter(el => el.id == id)[0]
   console.log(news) 
  const dialogRef = this.dialogService.open(EditComponent, {
    data: {id: id, codeType: news.codeType.codeType, codeListeMere: news.codeListeMere, 
      CodeRubrique: news.codeRubrique, libelle: news.libelle, valeur1: news.valeur1,
    valeur2:news.valeur2
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // When using an edit things are little different, firstly we find record inside DataService by id
      const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
      // Then you update that record using data from dialogData (values you enetered)
      this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
      // And lastly refresh table
      this.refreshTable();
    }
  });
}

deleteItem(i: number, id: number, title: string, state: string, url: string) {
  this.index = i;
  this.id = id;
  const dialogRef = this.dialogService.open(DeleteComponent, {
    data: {id: id, title: title, state: state, url: url}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
      // for delete we use splice in order to remove single object from DataService
      this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
      this.refreshTable();
    }
  });
}


private refreshTable() {
  this.paginator._changePageSize(this.paginator.pageSize);
}

public loadData() {
  this.exampleDatabase = new DataService(this.httpClient);
  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
 
}
}
`
export const class_data_ts = `
export class ExampleDataSource extends DataSource<$component_name> {
    _filterChange = new BehaviorSubject('');
  
    get filter(): string {
      return this._filterChange.value;
    }
  
    set filter(filter: string) {
      this._filterChange.next(filter);
    }
  
    filteredData: $component_name[] = [];
    renderedData: $component_name[] = [];
  
    constructor(public _exampleDatabase: DataService,
                public _paginator: MatPaginator,
                public _sort: MatSort) {
      super();
      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<$component_name[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._exampleDatabase.dataChange,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page
      ];
  
      this._exampleDatabase.getAll$component_name();
  
  
      return merge(...displayDataChanges).pipe(map( () => {
          // Filter data
          this.filteredData = this._exampleDatabase.data.slice().filter((issue: Repository) => {
            const searchStr = (issue.codeRubrique + issue.libelle + issue.valeur1 + issue.statut).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
  
          // Sort filtered data
          const sortedData = this.sortData(this.filteredData.slice());
  
          // Grab the page's slice of the filtered sorted data.
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
          return this.renderedData;
        }
      ));
    }
  
    disconnect() {}
  
  
    /** Returns a sorted copy of the database data. */
    sortData(data: $component_name[]): $component_name[] {
      if (!this._sort.active || this._sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';
  
        switch (this._sort.active) {
        
  
         $case_component
  
        }
  
        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

`
export const caseComponentts = `
case '$field_name': [propertyA, propertyB] = [a.$field_name, b.$field_name]; break;

`

export const model_ts = `
export class $component_name {
   $values
  }
`
