// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private totalTasksSource = new BehaviorSubject<number>(0); // Default value 0
//   totalTasks$ = this.totalTasksSource.asObservable();  // Observable to listen for updates

//   // Method to update the total tasks count
//   updateTotalTasks(count: number): void {
//     this.totalTasksSource.next(count);
//   }
// }
