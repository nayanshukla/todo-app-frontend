import { OnInit, Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalTasks: number = 0;
  tasksCompletedPercentage: number = 0;
  tasksPendingPercentage: number = 0;
  avgTimePerTask: number = 0;
  pendingTasks: number = 0;
  totalTimeLapsed: number = 0;
  totalTimeToFinish: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetch all todos and perform calculations
    this.apiService.getAllTodos().subscribe(
      (todos) => {
        this.calculateSummary(todos);
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }

  private calculateSummary(todos: any[]): void {
    const completedTasks = todos.filter(task => task.status === 'Completed');
    const pendingTasks = todos.filter(task => task.status === 'WIP');
    const openTasks = todos.filter(task => task.status === 'OPEN');

    this.totalTasks = todos.length;
    this.tasksCompletedPercentage = (completedTasks.length / this.totalTasks) * 100;
    this.tasksPendingPercentage = 100 - this.tasksCompletedPercentage;

    const totalTimeSpent = completedTasks.reduce((sum, task) => sum + task.timeSpent, 0);
    this.avgTimePerTask = totalTimeSpent / completedTasks.length || 0;

    this.pendingTasks = pendingTasks.length;
    this.totalTimeLapsed = pendingTasks.reduce((sum, task) => sum + task.timeLapsed, 0);
    this.totalTimeToFinish = pendingTasks.reduce((sum, task) => sum + task.estimatedFinishTime, 0);
  }
}
