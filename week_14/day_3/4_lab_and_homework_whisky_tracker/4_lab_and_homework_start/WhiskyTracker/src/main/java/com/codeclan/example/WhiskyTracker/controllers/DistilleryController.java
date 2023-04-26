package com.codeclan.example.WhiskyTracker.controllers;

import com.codeclan.example.WhiskyTracker.models.Distillery;
import com.codeclan.example.WhiskyTracker.models.Whisky;
import com.codeclan.example.WhiskyTracker.repositories.DistilleryRepository;
import com.codeclan.example.WhiskyTracker.repositories.WhiskyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DistilleryController {

    @Autowired
    DistilleryRepository distilleryRepository;

    @Autowired
    WhiskyRepository whiskyRepository;

    @GetMapping(value = "/distilleries/{region}")
    public ResponseEntity<List<Distillery>> getDistilleryByRegion(@PathVariable String region) {
        return new ResponseEntity<>(distilleryRepository.findByRegion(region), HttpStatus.OK);
    }

    @GetMapping(value = "/distilleries/whisky-age/{age}")
    public ResponseEntity<List<Distillery>> getDistilleriesByWhiskyAge(@PathVariable int age) {
        List<Whisky> whiskies = whiskyRepository.findByAge(age);
        return new ResponseEntity<>(distilleryRepository.findByWhiskiesAge(age), HttpStatus.OK);
    }

}
