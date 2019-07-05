import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <div class="sign-in-container">
      <a href="https://ohou.se/">
        <img src="../../assets/logo.png" alt="오늘의 집 로고" class="logo">
      </a>
      <form class="login-form">
        <input type="text" placeholder="이메일" class="email">
        <input type="password" placeholder="비밀번호" class="password">
        <button class="submit">로그인</button>
      </form>
      <div class="login-menu">
      <a href="#" class="login-submenu">비밀번호 재설정</a>
      <a href="#" class="login-submenu">회원가입</a>
      </div>
    </div>
  `,
  styles: [`
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
    font-size: 15px;
    line-height: 50px;
    color: #424242;
    padding: 0 15px;
    border: solid 1px #dbdbdb;
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", sans-serif;
  }
  .email{
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  .password{
    border-radius: 0 0 4px 4px;
  }
  .submit{
    display: block;
    width: 100%;
    height: 50px;
    margin: 20px 0;
    padding: 13px 15px;
    font-size: 17px;
    line-height: 1.41;
    color: white;
    background-color: rgb(53, 197,  240);
    border: 1px solid rgb(53, 197, 240);
    border-radius: 5px;
    font-weight: bold;
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", sans-serif;

  }
  .login-menu{
    margin: 20px 0;
    text-align: center;
    color: #424242;
    font-size: 15px;
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
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
