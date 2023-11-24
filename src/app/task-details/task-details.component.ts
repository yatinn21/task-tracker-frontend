import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { CompleteTaskDialogComponentComponent } from '../complete-task-dialog-component/complete-task-dialog-component.component';
import { EntryDialogComponent } from '../entry-dialog/entry-dialog.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskId: any = '';
  task: any;
  estimateHours: any;
  estimateNotes: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    sessionStorage.setItem('task_id', this.taskId);
    const a: any = sessionStorage?.getItem('taskDetail');
    if (a != 'undefined') {
      this.estimateHours = JSON.parse(a)?.['estimateHours'];
      this.estimateNotes = JSON.parse(a)?.['estimateNotes'];
    }
    // console.log('a',this.estimateHours, this.estimateNotes);
    this.loadTaskDetails();
  }

  loadTaskDetails() {
    let obj = {
      taskNumber: this.taskId,
      estimateHours: this.estimateHours,
      estimateNotes: this.estimateNotes
    }
    this.taskService.getTaskDetails(this.taskId, obj).subscribe(
      (data: any) => {
        this.task = data;
      },
      (error: any) => {
        console.error('Error loading task details:', error);
      }
    );
  }

  completeTask(task: any): void {
    const dialogRef = this.dialog.open(CompleteTaskDialogComponentComponent, {
      width: '300px',
      data: { taskNumber: task.taskNumber },
    });

  }

  addEntry(): void {
    const dialogRef = this.dialog.open(EntryDialogComponent, {
      width: '50%',

    });

    // dialogRef.afterClosed().subscribe(result => {
    // if (result) {

    // }
    // });
  }

}
