package sapozhnikov.diplom.server.api.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import sapozhnikov.diplom.server.api.model.enums.UserRole;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String login;
    private String password;
    private String email;

    @Column(name = "role", nullable = false)
    private UserRole role;
    @Override
    public String toString() {
        return "Account{" +
                "id=" + this.id +
                ", login='" + this.login + '\'' +
                ", password='" + this.password + '\'' +
                ", email='" + this.email + '\'' +
                '}';
    }
}
