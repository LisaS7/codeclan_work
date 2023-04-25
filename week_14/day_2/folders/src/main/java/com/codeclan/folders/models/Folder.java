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
@Table(name="folders")
public class Folder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "folder")
    @JsonIgnoreProperties({"folders"})
    private List<File> files;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Folder(String title, User user) {
        this.title = title;
        this.user = user;
        this.files = new ArrayList<>();
    }

    public void addFiles(File ...files) {
        this.files.addAll(List.of(files));
    }
}
