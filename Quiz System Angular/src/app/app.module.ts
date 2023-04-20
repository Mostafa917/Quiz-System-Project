import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './pages/admin/quizContent/subjects/subjects.component';
import { SubjectQuestionsComponent } from './pages/admin/quizContent/subject-questions/subject-questions.component';
import { AllQuestionsComponent } from './pages/admin/quizContent/all-questions/all-questions.component';
import { SingleQuestionComponent } from './pages/admin/quizContent/single-question/single-question.component';
import { AllUsersComponent } from './pages/admin/userActions/all-users/all-users.component';
import { SingleUserComponent } from './pages/admin/userActions/single-user/single-user.component';
import { EditUserComponent } from './pages/admin/userActions/edit-user/edit-user.component';
import { AddQuestionComponent } from './pages/admin/quizContent/add-question/add-question.component';
import { EditQuestionComponent } from './pages/admin/quizContent/edit-question/edit-question.component';
import { StartQuizComponent } from './pages/User/QuizActions/start-quiz/start-quiz.component';
import { LoginComponent } from './pages/Shared/Authentication/login/login.component';
import { HomepageComponent } from './pages/Shared/homepage/homepage.component';
import { RegisterComponent } from './pages/Shared/Authentication/register/register.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/Shared/navbar/navbar.component';
import { DeleteUserComponent } from './pages/admin/userActions/delete-user/delete-user.component';
import { DeleteAllUsersComponent } from './pages/admin/userActions/delete-all-users/delete-all-users.component';
import { DelQuestionComponent } from './pages/admin/quizContent/del-question/del-question.component';
import { DelSubjectComponent } from './pages/admin/quizContent/del-subject/del-subject.component';
import { DelAllSubjectsComponent } from './pages/admin/quizContent/del-all-subjects/del-all-subjects.component';
import { ViewSubjectsComponent } from './pages/User/QuizActions/view-subjects/view-subjects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LogoutComponent } from './pages/Shared/Authentication/logout/logout.component';
import { UserProfileComponent } from './pages/User/user-profile/user-profile.component';
import { ActivationComponent } from './pages/User/activation/activation.component';
import { UnauthorizedComponent } from './pages/auth/unauthorized/unauthorized.component';
import { AdminRequestComponent } from './pages/admin/userActions/admin-request/admin-request.component';
import { ManagingAdminRequestsComponent } from './pages/admin/userActions/managing-admin-requests/managing-admin-requests.component';
@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SubjectQuestionsComponent,
    AllQuestionsComponent,
    SingleQuestionComponent,
    AllUsersComponent,
    SingleUserComponent,
    EditUserComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    StartQuizComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    DeleteUserComponent,
    DeleteAllUsersComponent,
    DelQuestionComponent,
    DelSubjectComponent,
    DelAllSubjectsComponent,
    ViewSubjectsComponent,
    NotFoundComponent,
    LogoutComponent,
    UserProfileComponent,
    ActivationComponent,
    UnauthorizedComponent,
    AdminRequestComponent,
    ManagingAdminRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
