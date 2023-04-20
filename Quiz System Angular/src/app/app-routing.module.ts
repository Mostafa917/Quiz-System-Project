import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './pages/admin/userActions/all-users/all-users.component';
import { SingleUserComponent } from './pages/admin/userActions/single-user/single-user.component';
import { DeleteUserComponent } from './pages/admin/userActions/delete-user/delete-user.component';
import { EditQuestionComponent } from './pages/admin/quizContent/edit-question/edit-question.component';
import { DeleteAllUsersComponent } from './pages/admin/userActions/delete-all-users/delete-all-users.component';
import { SubjectsComponent } from './pages/admin/quizContent/subjects/subjects.component';
import { AddQuestionComponent } from './pages/admin/quizContent/add-question/add-question.component';
import { AllQuestionsComponent } from './pages/admin/quizContent/all-questions/all-questions.component';
import { SingleQuestionComponent } from './pages/admin/quizContent/single-question/single-question.component';
import { DelQuestionComponent } from './pages/admin/quizContent/del-question/del-question.component';
import { DelSubjectComponent } from './pages/admin/quizContent/del-subject/del-subject.component';
import { DelAllSubjectsComponent } from './pages/admin/quizContent/del-all-subjects/del-all-subjects.component';
import { SubjectQuestionsComponent } from './pages/admin/quizContent/subject-questions/subject-questions.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StartQuizComponent } from './pages/User/QuizActions/start-quiz/start-quiz.component';
import { Subject } from 'rxjs';
import { ViewSubjectsComponent } from './pages/User/QuizActions/view-subjects/view-subjects.component';
import { RegisterComponent } from './pages/Shared/Authentication/register/register.component';
import { LoginComponent } from './pages/Shared/Authentication/login/login.component';
import { LogoutComponent } from './pages/Shared/Authentication/logout/logout.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { UserProfileComponent } from './pages/User/user-profile/user-profile.component';
import { ActivationComponent } from './pages/User/activation/activation.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './pages/Shared/homepage/homepage.component';
import { UnauthorizedComponent } from './pages/auth/unauthorized/unauthorized.component';
import { UserAuthGuardGuard } from './guards/user-auth-guard.guard';
import { AdminRequestComponent } from './pages/admin/userActions/admin-request/admin-request.component';
import { ManagingAdminRequestsComponent } from './pages/admin/userActions/managing-admin-requests/managing-admin-requests.component';

const routes: Routes = [
  
  {path:'users',children:[
    {path:'',component:AllUsersComponent},
    {path:'user/:id',component:SingleUserComponent},
    {path:'deleteUser/:id',component:DeleteUserComponent},
    {path:'editUser/:id',component:EditQuestionComponent},
    {path:'deleteAllUsers',component:DeleteAllUsersComponent},
    {path:'adminRequests',component:AdminRequestComponent},
    {path:'manageAdminRequests/:id/:response',component:ManagingAdminRequestsComponent}
  ],canActivate:[AuthGuard]},

  {path:'subjects',children:[
    {path:'',component:SubjectsComponent},
    {path:'addQuestion',component:AddQuestionComponent},
    {path:'allQuestions',component:AllQuestionsComponent},
    {path:'editQuestion/:id',component:EditQuestionComponent},
    {path:'question/:id/:questid',component:SingleQuestionComponent},
    {path:'delQuestion/:id/:questid',component:DelQuestionComponent},
    {path:'delSubject/:id',component:DelSubjectComponent},
    {path:'delAllSubjects',component:DelAllSubjectsComponent},
    {path:'subjectQuestions/:id',component:SubjectQuestionsComponent}
  ],canActivate:[AuthGuard]},


  {path:'quiz',children:[
    {path:'',component:ViewSubjectsComponent},
    {path:'startQuiz/:id',component:StartQuizComponent},
  ],canActivate:[UserAuthGuardGuard]},

  {path:'user/activation/:id',component:ActivationComponent,canActivate:[UserAuthGuardGuard]},
  {path:'user/profile/:id',component:UserProfileComponent,canActivate:[UserAuthGuardGuard]},

  {path:'logout',component:LogoutComponent},

  {path:'',component:HomepageComponent},
  

  //non AuthGroup
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path: '404', component: NotFoundComponent},
  //{ path: '**',  redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
