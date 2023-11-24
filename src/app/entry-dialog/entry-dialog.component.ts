import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.css']
})
export class EntryDialogComponent implements OnInit {
  estimateHours: any = '';
  estimateNotes: any = '';
  editorContent: any = '';
  task_id: any;

  ngOnInit() {
    this.task_id = sessionStorage.getItem('task_id');
  }

  constructor(private entryService: TaskService, private route: Router,
    public dialogRef: MatDialogRef<EntryDialogComponent>,
  ) { }

  editorConfig = {
    base_usrl: '/tinymce',
    suffic: '.min',
    plugins: 'lists link image wordcount',
    height: 250,
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddEntry(): void {
    // console.log(this.estimateHours , this.editorContent)
    if (this.estimateHours && this.editorContent) {
      const entry = { estimateHours: this.estimateHours, estimateNotes: this.editorContent };
      this.entryService.entryForSameTask({
        taskNumber: this.task_id,
        estimateHours: this.estimateHours,
        estimateNotes: this.editorContent
      }).subscribe((res: any) => {
        // console.log(res);
        if (res) {
          this.dialogRef.close(entry);
          this.route.navigate(['task-list']);
        }
      })
      // console.log(entry);
    }
  }
}
