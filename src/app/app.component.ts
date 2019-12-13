import { Component, OnInit } from '@angular/core';
import QiscusSDK from 'qiscus-sdk-core';

const qiscus = new QiscusSDK();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'initiating qiscus sdk ...';
  
  ngOnInit() {
    const self = this;
    qiscus.init({
      AppId: 'sdksample',
      options: {
        loginSuccessCallback(data) {
          console.log('successfully login', data);
          self.title = `User ${data.user.username} has successfully login`;
        }
      }
    })
    qiscus.setUser('fikri@qiscus.com', 'password', 'Fikri');
  }
}
