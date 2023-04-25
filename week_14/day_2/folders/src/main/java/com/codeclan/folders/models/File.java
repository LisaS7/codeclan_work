package com.codeclan.folders.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor @Getter @Setter
@Entity
@Table(name="files")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String extension;
    private int size;

    @ManyToOne
    @JoinColumn(name = "folder_id", nullable = false)
    @JsonIgnoreProperties({"files"})
    private Folder folder;

    public File(String name, String extension, int size) {
        this.name = name;
        this.extension = extension;
        this.size = size;
    }

    public void setFolder(Folder folder) {
        this.folder = folder;
    }
}
