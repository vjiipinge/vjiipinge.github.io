(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{givm:function(e,r,s){"use strict";s.d(r,"a",function(){return i});var o=s("CcnG"),t=s("gIcY"),i=function(){function e(e,r){this.formBuilder=e,this.router=r,this.success=new o.m,this.recoverPasswordForm=e.group({email:new t.f("",t.s.compose([t.s.email,t.s.required]))})}return e.prototype.onSubmit=function(){var e=this;console.log("Recovering password ..."),this.success.emit(!0),this.recoverPasswordForm.reset(),this.redirectUrl&&setTimeout(function(){return e.router.navigate([e.redirectUrl])},1e3)},e}()}}]);