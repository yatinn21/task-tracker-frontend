import { Component, OnInit } from '@angular/core';
import tinymce from 'tinymce';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor( private taskFormService : TaskService, private route: Router){}

  formData: { taskNumber: string, estimateHours: string, estimateNotes: string } = {
    taskNumber: '',
    estimateHours: '',
    estimateNotes: ''
  };
  editorContent: any = '';
  alreadyExistsErr:boolean = false;

  editorConfig = {
    base_usrl: '/tinymce',
    suffic: '.min',
    plugins: 'lists link image wordcount',
    height: 250,
  }

  submitForm() {
    if (!this.formData.taskNumber || !this.formData.estimateHours) {
      console.error('Task Number and Estimate Hours are required.');
      return;
    }

    // const editor = document.getElementById('myEditor')?.innerHTML;
    // console.log( editor);
    // const editor = tinymce.get('myEditor');
    // const content = editor?.getContent();
    // console.log(content);

    // console.log('Form submitted:', this.formData.taskNumber, this.formData.estimateHours, this.editorContent);
    
    let obj = {
      taskNumber : this.formData.taskNumber,
      estimateHours : this.formData.estimateHours,
      estimateNotes :this.editorContent
    }

    this.taskFormService.submitTask(obj).subscribe((res: any)=>{
      if(res.error){
        this.alreadyExistsErr = true;
      } else {
        this.alreadyExistsErr = false;
        this.route.navigate(['task-list']);
      }
    })
  }
  
}