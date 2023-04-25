package com.codeclan.pirateservice.controllers;

import com.codeclan.pirateservice.models.Pirate;
import com.codeclan.pirateservice.repositories.PirateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PirateController {

    @Autowired
    PirateRepository pirateRepository;

    @GetMapping(value = "/pirates")
    public ResponseEntity<List<Pirate>> getAllPirates(){
        return new ResponseEntity<>(pirateRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/pirates/{id}")
    public ResponseEntity<Optional<Pirate>> getPirate(@PathVariable Long id){
        return new ResponseEntity<>(pirateRepository.findById(id), HttpStatus.OK) ;
    }

    @PostMapping(value="/pirates")
    public ResponseEntity<Pirate> savePirate(@RequestBody Pirate pirate) {
        pirateRepository.save(pirate);
        return new ResponseEntity<>(pirate, HttpStatus.CREATED);
    }

}
