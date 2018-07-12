import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
})

export class ServerComponent {
	allowNewServer = false;
	serverId: number = 10;
    serverStatus: string = "offine";
    serverCreate = "Server Was not created!";

   	serverName = '';
    onCreateServer () {
    	this.serverCreate = "Server was created :) ";
    }

    onUpdateServerName(event: Event){
    	console.log(event);
    	this.serverName = (<HTMLInputElement>event.target).value;
    }

    constructor() {
    	setTimeout( 
    		() => {
    			this.allowNewServer = true;	
    		}
    	,2000);
    }

    ngOnInit(){

    }
}