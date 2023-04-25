package com.codeclan.pirateservice.components;

import com.codeclan.pirateservice.repositories.PirateRepository;
import com.codeclan.pirateservice.repositories.RaidRepository;
import com.codeclan.pirateservice.repositories.ShipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

public class DataLoader implements ApplicationRunner {
    @Autowired
    PirateRepository pirateRepository;

    @Autowired
    ShipRepository shipRepository;

    @Autowired
    RaidRepository raidRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {
        
    }
}
