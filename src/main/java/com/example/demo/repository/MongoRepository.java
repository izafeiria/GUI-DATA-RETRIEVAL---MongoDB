package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MongoRepository {

    List<Object> findAppliance(String appliance, Boolean bool, Boolean id);

    List<Object>  findApp(String[] apps,String[] exist, Boolean id);

    //1st Query - exist or not exist


    //1st - extra exist or not exist in same query


    //2nd Query
    List <Object> findAll();

    //3rd Query
    List <Object> findIDs();

    //4th Query
    List <Object> applianceChars(String app, String id, Boolean onlyId, int size , String comp);

    List <Object> findPhaseMaps(String id);

    //5th Query
    List<Object> date(String date,String d, String when, Boolean id);

    //6th Query
    List<Object> applianceDate(String appliance,String date, String when, Boolean id);



}
