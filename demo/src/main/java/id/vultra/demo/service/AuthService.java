package id.vultra.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import id.vultra.demo.dto.response.LoginResponse;
import id.vultra.demo.models.User;
import id.vultra.demo.repository.UserRepository;


@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    

    public LoginResponse login(String username, String password) {
        User user = userRepository.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return new LoginResponse("token", user.getUsername(), user.getName(), user.getEmail());
        }
        return null;
    }

    public User register(String username, String name, String email, String password) {
        User user = new User((long) (userRepository.getAllUsers().size() + 1), username, name, email, password);
        userRepository.addUser(user);
        return user;
    }
    
}
