import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './components/management/management.component';
import {StudentComponent} from "./components/student/student.component";
import {SubjectComponent} from "./components/subject/subject.component";

export const Router: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'management', component: ManagementComponent }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(Router);
