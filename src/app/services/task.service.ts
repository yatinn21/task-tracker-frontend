import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  submitTask(obj: any){
    return this.http.post('http://localhost:4000/api/tasks/createTask',obj);
  }

  entryForSameTask(obj: any){
    return this.http.post('http://localhost:4000/api/tasks/entryForSameTask',obj)
  }

  getTasks(){
    return this.http.get('http://localhost:4000/api/tasks/getAllTasks');
  }

  getTaskDetails(taskId: any, obj:any){
    return this.http.post(`http://localhost:4000/api/tasks/getTaskById/${taskId}`,obj);
  }

  updateCompleteStatus(taskNumber:any ,obj: any){
    return this.http.post(`http://localhost:4000/api/tasks/updateTask/${taskNumber}`,obj);
  }
}
