package com.springboot.springbootuser.controller;

import com.springboot.springbootuser.domain.User;
import com.springboot.springbootuser.service.UserService;
import com.springboot.springbootuser.utils.Result;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/myLogin")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/myLog")
    public Result loginController(@RequestParam String uname, @RequestParam String password){
        User user = userService.loginService(uname, password);
        if(user!=null){
            return Result.success(user,"登录成功！");
        }else{
            return Result.error("123","账号或密码错误！");
        }
    }

    @PostMapping("/myRegister")
    public Result registerController(@RequestBody User newUser){
        User user = userService.registerService(newUser);
        if(user!=null){
            return Result.success(user,"注册成功！");
        }else{
            return Result.error("456","用户名已存在！");
        }
    }
}