export const delete_ts = `
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';

import { TranslationLoaderService } from "@shared/services/translation/translation-loader.service";
import { locale as localFrench } from "../../i18n/fr";

@Component({
  selector: 'ngsocle-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService,
    private translationLoaderService: TranslationLoaderService,
    ) { 
      this.translationLoaderService.loadTranslations(localFrench);

    }

    onNoClick(): void {
    this.dialogRef.close();
    }

    confirmDelete(): void {
    this.dataService.deleteRepository(this.data.id);
    }

}

`