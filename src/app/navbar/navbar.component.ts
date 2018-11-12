/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  //-- Title
  title = 'myNavbar!';

  icon = "menu";

  //--- Form option
  options: FormGroup;

  constructor(
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {

      this.options = fb.group({
        bottom: 0,
        fixed: false,
        top: 0
      });

  }


  ngOnInit(): void {

  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));



//-- Swap icon --

//  angular.module('MyApp',['ngMdIcons']
//  )
//    .controller('DemoCtrl', function($scope) {
//    $scope.icon = "menu";

//    $scope.changeIcon = function() {
//      $scope.icon = $scope.icon === 'arrow_back' ? 'menu' : 'arrow_back';
//    }
//  });


}
*/


import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(/*private authServ: AuthenticationService,*/ private router: Router) { }

  //user: Observable<firebase.User>;

  ngOnInit() {
    //this.user = this.authServ.authUser();
  }

  signout() {

  //  this.authServ.logout().then(onResolve => this.router.navigate(['/']));
  }

}
