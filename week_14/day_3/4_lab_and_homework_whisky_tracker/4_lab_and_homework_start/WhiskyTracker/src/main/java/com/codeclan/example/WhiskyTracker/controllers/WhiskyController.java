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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WhiskyController {

    @Autowired
    WhiskyRepository whiskyRepository;

    @Autowired
    DistilleryRepository distilleryRepository;

    @GetMapping(value = "/whiskies/year/{year}")
    public ResponseEntity<List<Whisky>>  getWhiskiesByYear(@PathVariable int year) {
        return new ResponseEntity<>(whiskyRepository.findByYear(year), HttpStatus.OK);
    }

    @GetMapping(value = "/whiskies")
    public ResponseEntity<List<Whisky>>  getWhiskiesByDistilleryAndAge(@RequestParam String distillery, @RequestParam int age) {
        Distillery distilleryFound = distilleryRepository.findByName(distillery).get(0);
        return new ResponseEntity<>(whiskyRepository.findByDistilleryAndAge(distilleryFound, age), HttpStatus.OK);
    }

    @GetMapping(value = "/whiskies/region/{region}")
    public ResponseEntity<List<Whisky>>  getWhiskiesByRegion(@PathVariable String region) {
        List<Whisky> whiskiesFound = whiskyRepository.findByDistilleryRegion(region);
        return new ResponseEntity<>(whiskiesFound, HttpStatus.OK);
    }

}
