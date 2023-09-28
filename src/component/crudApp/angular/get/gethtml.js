export const beginTable = `
<div class="container mat-elevation-z8">  
<mat-table #table [dataSource]="dataSource" matSort class="mat-cell">
`
export const ngcontainer = `
<ng-container matColumnDef="$field_name">
<mat-header-cell *matHeaderCellDef mat-sort-header>
  {{ "i18n.module.repository.table.$field_name.label"| translate }}
</mat-header-cell>
<mat-cell *matCellDef="let row" >{{row.$field_name}}</mat-cell>
</ng-container>
`
export const pagination_and_actions = `
<ng-container matColumnDef="actions">
<mat-header-cell *matHeaderCellDef>
  <button mat-icon-button color="primary" (click)="openAddDialog()">
    <mat-icon aria-label="Example icon-button with a heart icon">add</mat-icon>
  </button>
</mat-header-cell>

<mat-cell *matCellDef="let row; let i=index;">

<button mat-icon-button color="accent" (click)="startEdit(i, row.id,row.codeRubrique)">
    <mat-icon aria-label="Edit">edit</mat-icon>
  </button>

  <button mat-icon-button color="accent" (click)="deleteItem(i, row.id,  row.codeRubrique, row.libelle, row.valeur1,row.statut)">
    <mat-icon aria-label="Delete">delete</mat-icon>
  </button>


</mat-cell>
</ng-container>

<mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
<mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
</mat-table>


<div class="no-results" [style.display]="dataSource.renderedData.length == 0 ? '' : 'none'">
loader here 
</div>

<mat-paginator #paginator
           [length]="dataSource.filteredData.length"
           [pageIndex]="0"
           [pageSize]="10"
           [pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>
</div>
`
export const ngIfForTable = `
<ng-container matColumnDef="$field_name">
<mat-header-cell *matHeaderCellDef mat-sort-header>
  {{ "i18n.module.repository.table.$field_name.label"| translate }}
</mat-header-cell>
<mat-cell *matCellDef="let row" >
<div *ngIf="row.$field_name $comparation $value">
$html_if
</div>
<div *ngIf="row.$field_name $comparation_conter $value">
$html_else
</div>

</mat-cell>
</ng-container>
`



