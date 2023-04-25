package com.codeclan.folders.components;

import com.codeclan.folders.models.File;
import com.codeclan.folders.models.Folder;
import com.codeclan.folders.models.User;
import com.codeclan.folders.repositories.FileRepository;
import com.codeclan.folders.repositories.FolderRepository;
import com.codeclan.folders.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    UserRepository userRepository;

    @Autowired
    FolderRepository folderRepository;

    @Autowired
    FileRepository fileRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args) throws Exception {

        User alec = new User("Alec");
        userRepository.save(alec);

        User frank = new User("Frank");
        userRepository.save(frank);

        Folder blippi = new Folder("blippi_songs", alec);
        Folder thomas = new Folder("thomas_the_tank", alec);
        folderRepository.save(blippi);
        folderRepository.save(thomas);

        Folder car = new Folder("car_stuff", frank);
        folderRepository.save(car);

        File boatSong = new File("the_boat_song", "mp4", 200);
        File dinosaurSong = new File("the_dinosaur_song", "mp4", 380);
        fileRepository.save(boatSong);
        fileRepository.save(dinosaurSong);
        blippi.addFiles(boatSong, dinosaurSong);

        File journeyBeyondSodor = new File("Journey Beyond Sodor", "mp4", 1500);
        fileRepository.save(journeyBeyondSodor);
        thomas.addFiles(journeyBeyondSodor);

        File bugatti = new File("bugatti_chiron", "jpg", 2);
        File chevrolet = new File("chevvy_camaro", "jpg", 3);
        fileRepository.save(bugatti);
        fileRepository.save(chevrolet);
        car.addFiles(bugatti, chevrolet);
    }
}
