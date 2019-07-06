import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
  <div class="wrapper">
    <div class="sign-in-container">
      <a href="https://ohou.se/">
        <img src="../../assets/logo.png" alt="오늘의 집" class="logo">
      </a>
      <div>
      <form class="login-form" [formGroup]="loginForm">
        <input type="text" placeholder="이메일" class="email"
        formControlName="email">
        <input type="password" placeholder="비밀번호" 
        class="password" (keyup)="capslockCheck($event);"
        formControlName="password">
        <div class="capslockMessage"
        [style.opacity]="opacity">
          Caps Lock 이 켜져있네요!
        </div>
        <button class="submit" (ngSubmit)="onSubmit()">로그인</button>
      </form>
      </div>
      <div class="login-menu">
        <a href="#" class="login-submenu">비밀번호 재설정</a>
        <a href="#" class="login-submenu">회원가입</a>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .wrapper{
    width: 100%;
    height: 100vh;
  }
  .sign-in-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 300px;
  }
  .logo{
    width: 130px;
    height: 45px;
    margin: 0 auto;
    display: block;
  }
  .login-form{
    padding-top: 20px;
  }
  .email, .password{
    display: block;
    width: 100%;
    height: 50px;
    margin: 0;
    font-size: 1rem;
    line-height: 50px;
    color: #424242;
    padding: 0 15px;
    border: solid 1px #dbdbdb;
    font-family: inherit;
  }
  .email{
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  .password{
    border-radius: 0 0 4px 4px;
    position: relative
  }
  .capslockMessage{
    position: absolute;
    top: 47%;
    left: 100%;
    margin-left: 15px;
    transform: translate(0, -50%);
    color: white;
    background-color: #F77;
    padding: 10px;
    border-radius: 4px;
    font-size: 0.7rem;
    line-height: 13px;
    font-weight: bold;
    z-index: 2;
    transition: opacity ease .3s;
    width: 90px;
  }
  .capslockMessage:before{
    content: '';
    display: block;
    position: absolute;
    border-top: solid 5px transparent;
    border-bottom: solid 5px transparent;
    border-right: solid 11px #F77;
    left: 1px;
    top: 50%;
    transform: translate(-100%, -50%);
  }
  .submit{
    display: block;
    width: 100%;
    height: 50px;
    margin: 20px 0;
    padding: 13px 15px;
    font-size: 1rem;
    line-height: 1.41;
    color: white;
    background-color: rgb(53, 197,  240);
    border: 1px solid rgb(53, 197, 240);
    border-radius: 5px;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
  }
  .login-menu{
    margin: 20px 0;
    text-align: center;
    color: #424242;
    font-size: 1rem;
    line-height: 1.4;
  }
  .login-submenu{
    display: inline-block;
    padding: 3px 5px;
    margin: -3px 10px;
    color: inherit;
    text-decoration: none;
  }
  `]
})
export class SignInComponent implements OnInit{ 
  opacity = 0;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  capslockCheck(e) {
    this.opacity = e.getModifierState("CapsLock") ? 1 : 0;
  }
}
