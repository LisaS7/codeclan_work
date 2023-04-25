package com.codeclan.folders.repositories;

import com.codeclan.folders.models.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository  extends JpaRepository<File, Long> {
}
