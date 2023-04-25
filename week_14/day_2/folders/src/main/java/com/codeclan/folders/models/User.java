package com.codeclan.folders.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"users"})
    private List<Folder> folders;

    public User(String name) {
        this.name = name;
        this.folders = new ArrayList<>();
    }

    public void addFolders(Folder ...folders) {
        this.folders.addAll(List.of(folders));
    }
}
