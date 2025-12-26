import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplate } from './+private/+pages/private-template/private-template';
import { BooksPage } from './+private/+pages/books-page/books-page';
import { DoshboardPage } from './+private/+pages/doshboard-page/doshboard-page';
import { MembersPage } from './+private/+pages/members-page/members-page';
import { BorrowsPage } from './+private/+pages/borrows-page/borrows-page';
import { ReportsPage } from './+private/+pages/reports-page/reports-page';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    {
        path: 'private', canActivate: [privateGuard], component: PrivateTemplate, children: [
            { path: 'doshboard', component: DoshboardPage },
            { path: 'books', component: BooksPage },
            { path: 'members', component: MembersPage },
            { path: 'borrows', component: BorrowsPage },
            { path: 'reports', component: ReportsPage },
            { path: '', redirectTo: 'doshboard', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'doshboard' }

        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
