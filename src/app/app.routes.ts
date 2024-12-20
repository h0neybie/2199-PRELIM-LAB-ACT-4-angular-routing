import { Routes } from '@angular/router';
import { HomeComponent } from '../../admin/home/home.component';
import { PostComponent } from '../../admin/post/post.component';
import { UserComponent } from '../../admin/user/user.component';


export const routes: Routes = [  
    {path : 'user', component : UserComponent},
    {path : 'post', component : PostComponent},
    {path : '', component : HomeComponent}
];
