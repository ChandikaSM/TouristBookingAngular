import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  message: string;
}
@Component({
  selector: 'app-dialog-confirm-logout',
  standalone: true,
  imports: [MatDialogModule,  MatCardActions, MatCardContent, MatCardTitle, MatCard, MatCardHeader],
  templateUrl: './dialog-confirm-logout.component.html',
  styleUrl: './dialog-confirm-logout.component.scss'
})
export class DialogConfirmLogoutComponent {
  readonly dialogRef = inject(MatDialogRef<DialogConfirmLogoutComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}