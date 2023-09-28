export const htmldelete = `
<div class="container">
    <h3 mat-dialog-title>
      {{ 'i18n.module.$component_name.confirmType' | translate }}

    </h3>
    <div mat-dialog-content>
  
    </div>
  
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="1" (click)="confirmDelete()">
        {{ 'i18n.module.$component_name.buttons.delete' | translate }}
      </button>
      <button mat-button (click)="onNoClick()" tabindex="-1">
        {{ 'i18n.module.$component_name.buttons.cancel' | translate }}
      </button>
    </div>
  </div>
  

`