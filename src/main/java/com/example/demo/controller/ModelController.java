package com.example.demo.controller;

import com.example.demo.repository.MongoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "net2grid/")
@CrossOrigin("*") // we will accept from anywhere for testing
public class ModelController {
    private final MongoRepository mongoRepository;

    @GetMapping("models")
    public List<Object> findAll() {
        return mongoRepository.findAll();
    }

    @GetMapping("models/ids")
    public List<Object> findIDs() {
        return mongoRepository.findIDs();
    }

    @GetMapping("models/appliances")
    public List<Object> findAppliance(@RequestParam(name = "appliance") String appliance, @RequestParam(name = "exists") Boolean exist, @RequestParam(name = "id") Boolean id) {
        return mongoRepository.findAppliance(appliance, exist, id);
    }

    @GetMapping("models/appliance")
    public List<Object> findApp(@RequestParam(name = "appliance") String[] appliance, @RequestParam(name = "exist") String[] exist, @RequestParam(name = "id") Boolean id) {
        return mongoRepository.findApp(appliance, exist, id);
    }

    @GetMapping("models/characteristics")
    public List<Object> applianceChars(@RequestParam(name = "appliance") String appliance, @RequestParam(name = "id", required = false, defaultValue = "") String id, @RequestParam(name = "onlyId") Boolean onlyId,
                                       @RequestParam(name = "size", required = false, defaultValue = "0") int size, @RequestParam(name = "comp", required = false, defaultValue = "") String comp) {
        return mongoRepository.applianceChars(appliance, id, onlyId, size, comp);
    }
    @GetMapping("models/phaseMaps")
    public List<Object> findPhaseMaps(@RequestParam (name = "id") String id ){
        return mongoRepository.findPhaseMaps(id);
    }
    @GetMapping("models/date")
    public List<Object> dateComparison(@RequestParam(name = "date") String date, @RequestParam(name = "d") String d, @RequestParam(name = "when") String when, @RequestParam(name = "id") Boolean id) {
        return mongoRepository.date(date, d, when, id);
    }

    @GetMapping("models/applianceDate")
    public List<Object> applianceDate(@RequestParam(name = "appliance") String appliance, @RequestParam(name = "date") String date, @RequestParam(name = "when") String when, @RequestParam(name = "id") Boolean id) {
        return mongoRepository.applianceDate(appliance, date, when, id);
    }

}