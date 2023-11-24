import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = []; 
  taskList: any[] = [];
  // dummyTasks = [
  //   {
  //     taskNumber: 1,
  //     estimateHours: 5,
  //     estimateNotes: 'Description for Task 1',
  //     dueDate: '2023-11-30',
  //     completed: false,
  //   },
  //   {
  //     taskNumber: 2,
  //     estimateHours: 8,
  //     estimateNotes: 'Description for Task 2',
  //     dueDate: '2023-12-15',
  //     completed: true,
  //   },
  //   {
  //     taskNumber: 3,
  //     estimateHours: 3,
  //     estimateNotes: 'Description for Task 3',
  //     dueDate: '2023-12-01',
  //     completed: false,
  //   },
  //   // Add more tasks as needed
  // ];
  
  constructor(private taskService: TaskService, private route: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  // loadTasks() {
  //   // this.tasks = this.dummyTasks;
  //   // console.log(this.tasks)
  //   this.taskService.getTasks().subscribe(
  //     (data: any) => {
  //       if(data.length){
  //         this.tasks = data;
  //         console.log(this.tasks,'all task')
  //       } else {
  //         this.route.navigate(['task-form']);
  //       }
  //     },
  //     error => {
  //       console.error('Error loading tasks:', error);
  //     }
  //   );
  // }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        if (data.length) {
          // Group tasks by taskNumber
          const taskListMap = new Map<string, any>();
          data.forEach((task: any) => {
            const taskNumber = task.taskNumber;
            if (taskListMap.has(taskNumber)) {
              taskListMap.get(taskNumber).tasks.push(task);
            } else {
              taskListMap.set(taskNumber, { taskNumber, tasks: [task] });
            }
          });
  
          this.taskList = Array.from(taskListMap.values());
        } else {
          this.route.navigate(['task-form']);
        }
      },
      error => {
        console.error('Error loading tasks:', error);
      }
    );
  }
  

  viewDetails(task: any) {
    console.log('taskk',task);
    sessionStorage.setItem('taskDetail',JSON.stringify(task));
    this.route.navigate(['task-details/',task.taskNumber])
    // console.log('View details', task);

  }
}
