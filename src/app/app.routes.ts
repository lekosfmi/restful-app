import { RouterModule, Routes } from '@angular/router';

import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contacts/:id',
    component: ContactPageComponent
  },
  {
    path: 'contacts/:id/edit',
    component: ContactEditPageComponent
  }
];
