package id.vultra.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.vultra.demo.dto.response.BaseResponse;
import id.vultra.demo.models.User;
import id.vultra.demo.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("")
    public BaseResponse<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return new BaseResponse<List<User>>("Success", users);
    }
    
}
