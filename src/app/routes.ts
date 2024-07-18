import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    },
    {
        path: 'search',
        component: SearchComponent,
        title: 'Search page'
    }
  ];
  
  export default routeConfig;