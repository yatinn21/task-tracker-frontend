import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-task-dialog-component',
  templateUrl: './complete-task-dialog-component.component.html',
  styleUrls: ['./complete-task-dialog-component.component.css']
})
export class CompleteTaskDialogComponentComponent implements OnInit {

  totalHours: any = '';
  finalNotes: any = '';
  taskNumber: any = '';
  estimateHours: any;
  estimateNotes: any;


  ngOnInit(): void {
    this.taskNumber = sessionStorage.getItem('task_id');
    const a: any = sessionStorage?.getItem('taskDetail');
    if (a != 'undefined') {
      this.estimateHours = JSON.parse(a)?.['estimateHours'];
      this.estimateNotes = JSON.parse(a)?.['estimateNotes'];
    }
  }

  constructor(public service: TaskService, public route: Router,
    public dialogRef: MatDialogRef<CompleteTaskDialogComponentComponent>,
  ) { }

  onSubmit(): void {
    let obj = {
      actualHours: this.totalHours,
      notes: this.finalNotes,
      estimateHours: this.estimateHours,
      estimateNotes: this.estimateNotes
    }
    // console.log(this.taskNumber, this.totalHours, this.finalNotes);

    this.service.updateCompleteStatus(this.taskNumber, obj).subscribe((res: any) => {
      // console.log(res.message);
      if (res.message) {
        this.route.navigate(['task-list']);
      }
    });
    this.dialogRef.close({ totalHours: this.totalHours, finalNotes: this.finalNotes });
  }
}
