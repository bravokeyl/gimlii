import {Page,MenuController,IonicApp} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';


@Page({
	"templateUrl" : "build/pages/login/login.html"
})

export class GLogin {
	constructor(private app: IonicApp, private menu: MenuController){
		this.app = app;
		this.menu = menu;
	}

	authenticate(app) {
		let nav = this.app.getComponent('nav');
        nav.setRoot(HelloIonicPage);
		// this.rootPage = HelloIonicPage;
		// this.nav.push(HelloIonicPage,{});
	}
}
