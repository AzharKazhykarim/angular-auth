import { AuthGuard } from './../../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'test', component: TestComponent }],
  },
];
@NgModule({
  declarations: [HomeComponent, TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
