package id.vultra.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import id.vultra.demo.models.User;

@Service
public class UserRepository {

    private final List<User> users = new ArrayList<>();

    public UserRepository() {
        users.add(new User(1L, "admin", "admin", "Admin","password"));
        users.add(new User(2L, "joshua", "Antonius Joshua", "joshua@gmail.com","password"));
    }

    public List<User> getAllUsers() {
        return users;
    }

    public User getUserById(Long id) {
        return users.stream()
                .filter(user -> user.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public User getUserByUsername(String username) {
        return users.stream()
                .filter(user -> user.getUsername().equals(username) || user.getEmail().equals(username))    
                .findFirst()
                .orElse(null);
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void removeUser(User user) {
        users.remove(user);
    }
    
}
