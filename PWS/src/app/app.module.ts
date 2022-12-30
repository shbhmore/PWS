import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../UI/header/header.component';
import { MenubarComponent } from 'src/UI/menubar/menubar.component';
import { MainComponent } from 'src/UI/main/main.component';
import { FooterComponent } from 'src/UI/footer/footer.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { OrganizationComponent } from '../components/organization/organization.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { PersonComponent } from '../components/person/person.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    MainComponent,
    FooterComponent,
    EmployeeComponent,
    SkillsComponent,
    OrganizationComponent,
    ExperienceComponent,
    PersonComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
