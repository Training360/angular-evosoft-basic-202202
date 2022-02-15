import { Component } from '@angular/core';
import { User } from './model/user';
import { ConfigService, ITableColumn } from './service/config.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive-pipe';

  userList: User[] = this.userService.list;
  cols: ITableColumn[] = this.config.userTableColumns;

  constructor(
    private userService: UserService,
    private config: ConfigService,
  ) {}
}
