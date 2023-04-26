package com.codeclan.example.WhiskyTracker.repositories;

import com.codeclan.example.WhiskyTracker.models.Distillery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DistilleryRepository extends JpaRepository<Distillery, Long> {
    List<Distillery> findByRegion(String region);
    List<Distillery> findByName(String name);
    List<Distillery> findByWhiskiesAge(int age);
}
