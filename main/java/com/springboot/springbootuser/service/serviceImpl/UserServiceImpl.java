package com.springboot.springbootuser.service.serviceImpl;

import com.springboot.springbootuser.domain.User;
import com.springboot.springbootuser.repository.UserDao;
import com.springboot.springbootuser.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao userDao;

    @Override
    public User loginService(String uname, String password) {
        // 如果账号密码都对则返回登录的用户对象，若有一个错误则返回null
        User user = userDao.findByUnameAndPassword(uname, password);
        // 重要信息置空
        if(user != null){
            user.setPassword();
        }
        return user;
    }

    @Override
    public User registerService(User user) {
        //当新用户的用户名已存在时
        if(userDao.findByUname(user.getUname())!=null){
            // 无法注册
            return null;
        }else{
            //返回创建好的用户对象(带uid)
            User newUser = userDao.save(user);
            newUser.setPassword();
            return newUser;
        }
    }
}
