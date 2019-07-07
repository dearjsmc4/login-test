import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  template: `    
    <div class="sign-in-form">
    <h1 class="sign-in-form__header">
      <a class="sign-in-form__header__link" href="/">
        <span class="icon-page-login__a-1" aria-label="오늘의집" ></span>
      </a>
    </h1>
    <form class="sign-in-form__form" id="new_user" [formGroup]="userForm" >
      <input placeholder="이메일" autofocus="autofocus"
      class="sign-in-form__form__input form-control sign-in-form__form__email"
      type="text" id="user_email"
      formControlName="user[email]">
      
      <div class="sign-in-form__form__input-wrap sign-in-form__form__password" (capsLock)="capsOn=$event">
        <input placeholder="비밀번호" autocomplete="off"
        class="sign-in-form__form__input form-control"
        type="password" id="user_password"        
        formControlName="user[password]">
        <p *ngIf="capsOn" class="sign-in-form__form__password__caps show">Caps Lock이<br>켜져있네요!</p>
      </div>

      <button class="sign-in-form__form__submit btn btn-priority">로그인</button>
    </form>
    
    <div class="sign-in-form__action">
      <a class="sign-in-form__action__entry" href="/users/password/new">비밀번호 재설정</a>
      <a class="sign-in-form__action__entry" href="/normal_users/new">회원가입</a>
    </div>    
    
  </div>
    
  `,
  styles: [
    `
    
    .sign-in-form {
      width: 100%;
      max-width: 360px;
      padding: 40px 30px;
      margin: 0 auto;
      box-sizing: border-box;
    }
    .sign-in-form__header {
      display: block;
      margin: 0 0 30px;
    }
    .sign-in-form__header__link {
      display: block;
      text-align: center;
    }
    .form-control:hover, .form-control:active {
      background-color: #fafafa;
      border-color: #bdbdbd;
  }
  input[type="number"], input[type="text"], input[type="password"], input[type="file"], input[type="tel"], input[type="email"], select, option, textarea, input[type="submit"], button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
}
.sign-in-form__form__email {
  border-radius: 4px 4px 0 0;
}
.sign-in-form__form__input {
  display: block;
  width: 100%;
  height: 50px;
  margin: 0;
  font-size: 15px;
  line-height: 50px;
  color: #424242;
}
.form-control {
  font-size: 14px;
}

    .icon-page-login__a-1 {
      width: 146px;
      height: 50px;
      background-position: left 0px top 0px;      
    }
    [class*="icon-page-login__"] {
      background-image: url("assets/img/page-login.png");
      background-size: 320px auto;
  }
  [class*="icon-page-login__"], [class*="icon-page-pro-login__"] {
    background-repeat: no-repeat;
    display: inline-block;
}
    .sign-in-form__form__email {
      border-radius: 4px 4px 0 0;
    }
    .sign-in-form__form__input {
      display: block;
      width: 100%;
      height: 50px;
      margin: 0;
      font-size: 15px;
      line-height: 50px;
      color: #424242;
    }
    .form-control {
      transition: .2s border-color, .2s box-shadow, .2s background-color;
      display: block;
      box-sizing: border-box;
      height: 40px;
      width: 100%;
      padding: 0 15px;
      line-height: 40px;
      border-radius: 4px;
      border: solid 1px #dbdbdb;
      background-color: white;
      color: #424242;
      font-size: 12px;
    }
    .sign-in-form__form__password {
      position: relative;
      margin: -1px 0 0;
    }
    
    .sign-in-form__form__password > .form-control {
      border-radius: 0 0 4px 4px;
  }
  .sign-in-form__form__password__caps {
    position: absolute;
    top: 50%;
    left: 100%;
    margin-left: 15px;
    transform: translate(0, -50%);
    color: white;
    background-color: #F77;
    padding: 10px;
    border-radius: 4px;
    font-size: 11px;
    line-height: 13px;
    font-weight: bold;
    white-space: nowrap;
    z-index: 2;
    opacity: 0;
    transition: opacity ease .3s;
}
.sign-in-form__form__password__caps.show {
  opacity: 1;
}
.sign-in-form__form__submit {
  display: block;
  width: 100%;
  height: 50px;
  margin: 20px 0;
  padding: 13px 15px;
  font-size: 17px;
  line-height: 1.41;
}
.btn {
  transition: .2s ease;
}

.btn {
  box-sizing: border-box;
  display: inline-block;
  padding: 0;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
}

.btn, .unselectable {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn-priority {
  background-color: #35C5F0;
  border-color: #35C5F0;
  color: white;
}

.btn-priority:active, .btn-priority:hover {
  background-color: #11b9eb;
}
.sign-in-form__action {
  margin: 20px 0;
  text-align: center;
  color: #424242;
  font-size: 15px;
  line-height: 1.4;
}
.sign-in-form__action__entry {
  display: inline-block;
  padding: 3px 5px;
  margin: -3px 10px;
}
    .sign-in-form__action__entry:hover, .sign-in-form__action__entry:focus, .sign-in-form__action__entry:active {
      text-decoration: underline;
    }
input[type="number"], input[type="text"], input[type="password"], input[type="file"], input[type="tel"], input[type="email"], select, option, textarea, input[type="submit"], button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

a, button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"] {
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
a {
  color: inherit;
  text-decoration: none;
}
input[type="number"], input[type="text"], input[type="password"], input[type="file"], input[type="tel"], input[type="email"], select, option, textarea, input[type="submit"], button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
    `
  ]
})
export class LoginComponent implements OnInit {

  capsOn: boolean = false;
  userFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
