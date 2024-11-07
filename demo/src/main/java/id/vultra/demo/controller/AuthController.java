package id.vultra.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import id.vultra.demo.dto.LoginDTO;
import id.vultra.demo.dto.RegisterDTO;
import id.vultra.demo.dto.response.BaseResponse;
import id.vultra.demo.dto.response.LoginResponse;
import id.vultra.demo.models.User;
import id.vultra.demo.repository.UserRepository;
import id.vultra.demo.service.AuthService;

@RestController
@RequestMapping("/api/v1/auth") // prefix
public class AuthController {

    @Autowired
    private AuthService authService;


    @PostMapping("/login") // Method POST "/api/v1/auth/login"
    /**
     * Request Body
     * ex : {
     *    "username": "admin",
     *    "password": "admin"    
     * }
     * @param loginDTO
     * @return
     */
    public BaseResponse<LoginResponse> login(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse =  authService.login(loginDTO.getUsername(), loginDTO.getPassword());

        if (loginResponse == null) {
            return new BaseResponse<LoginResponse>("Failed", null);
        }

        return new BaseResponse<LoginResponse>("Success", loginResponse);
    }

    @PostMapping("/register")
    public BaseResponse<User> register(@RequestBody RegisterDTO registerDTO){
        User user =  authService.register(registerDTO.getUsername(), registerDTO.getName(), registerDTO.getEmail(), registerDTO.getPassword());
        return new BaseResponse<User>("Success", user);
    }
}
// UserRepository userRepository = new UserRepository();
// AuthService authService = new AuthService(authRepository);
// AuthController authController = new AuthController(authService);

// class PromoService{
//     // user repository
//     private UserRepository userRepository;
//     PromoService(){
//         userRepository = new UserRepository();
//     }

// }

// class UserService{
//     private UserRepository userRepository;
//     UserService(){
//         userRepository = new UserRepository();
//     }
// }

// class OrderService{
//     private UserRepository userRepository;
//     OrderService(){
//         userRepository = new UserRepository();
//     }
// }