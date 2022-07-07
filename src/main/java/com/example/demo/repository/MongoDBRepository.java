package com.example.demo.repository;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Field;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import static com.mongodb.client.model.Projections.*;
import static com.mongodb.client.model.Filters.*;

@Repository
public class MongoDBRepository implements MongoRepository {

    private final MongoClient client;
    private MongoCollection<Document> modelCollection;
    @Value("${database}")
    private String database;

    @Value("${collection}")
    private String collection;

    public MongoDBRepository(MongoClient mongoClient) {
        this.client = mongoClient;
    }

    @PostConstruct
    void init() {modelCollection = client.getDatabase(database).getCollection(collection);}


    @Override
    public List<Object> findAppliance(String appliance,Boolean bool, Boolean id) {
        List models = new ArrayList();

        Bson query;
        if (appliance.equals("solar")) {
            query = new Document("solar", bool);
        }
        else {
            query = Filters.exists(appliance, bool);
        }
        if (id==true) {modelCollection.find(query).projection(fields(include("installationId"), excludeId())).iterator().forEachRemaining(models::add);}
        else { modelCollection.find(query).projection(exclude("v")).iterator().forEachRemaining(models::add);}

        return models;
    }

    @Override
    public List<Object> findApp(String[] apps,String[] exist, Boolean id) {
        int list = apps.length;
        List models = new ArrayList();
        Bson queries;
        List<Bson> query = new ArrayList<>();

        for(int i=0; i<list;  i++){

            Bson q;
            if (apps[i].equals("solar")){
                q = new Document("solar", Boolean.parseBoolean(exist[i]));
            }
            else{
                q = Filters.exists(apps[i], Boolean.parseBoolean(exist[i]));
            }
            query.add(q);
        }

        switch (list){
            case 1:
                queries = query.get(0);
                break;
            case 2:
                queries = and(query.get(0),query.get(1));
                break;
            case 3:
                queries = and(query.get(0),query.get(1),query.get(2));
                break;
            case 4:
                queries = and(query.get(0),query.get(1),query.get(2),query.get(3));
                break;
            case 5:
                queries = and(query.get(1),query.get(2),query.get(3),query.get(4));
                break;
            case 6:
                queries = and(query.get(1),query.get(2),query.get(3),query.get(4),query.get(5));
                break;
            case 7:
                queries = and(query.get(1),query.get(2),query.get(3),query.get(4),query.get(5),query.get(6));
                break;

            default:
                queries = null;
        }
            if(id.equals(true)){
            modelCollection.find(queries).projection(include("installationId")).iterator().forEachRemaining(models::add);}
            else{modelCollection.find(queries).projection(fields(excludeId(),exclude("v"))).iterator().forEachRemaining(models::add);}
            return models;
        }



    @Override
    public List<Object> findAll() {
        List models = new ArrayList();
        modelCollection.find().projection(excludeId()).iterator().forEachRemaining(models::add);
        //modelCollection.find().iterator().forEachRemaining(models::add);
        return models;
    }

    @Override
    public List<Object> findIDs() {
        List models = new ArrayList();
        //modelCollection.find().projection(fields(include("installationId"), excludeId())).iterator().forEachRemaining(models::add);
        modelCollection.find().projection(fields(include("installationId"),excludeId())).iterator().forEachRemaining(models::add);
        return models;
    }

    @Override
    public List<Object> applianceChars(String appliance, String id, Boolean onlyId, int size, String comp) {
        List models = new ArrayList();


        if (appliance.equals("solar")) {
            Bson query1 = new Document("solar", true);
            Bson query2 = include("installationId", "solarCapacity", "solarProductionMonthly");
            if (id.equals("")) {
                if(onlyId.equals(true)){
                    modelCollection.find(query1).projection(fields(include("installationId"),excludeId())).iterator().forEachRemaining(models::add);
                }
                else{ modelCollection.find(query1).projection(fields(query2,excludeId())).iterator().forEachRemaining(models::add); }}
            else {modelCollection.find(Filters.and(query1,eq("installationId", id))).projection(fields(query2,excludeId())).iterator().forEachRemaining(models::add);}
        }
        else {
            int s = size-1;
            Bson query5;
            Bson query;
            Bson query3 = Filters.exists(appliance,true);
            Bson query4 = include("installationId", appliance);
            switch (comp) {

                case "=":
                    query5 = Filters.size(appliance, size);
                    query = Filters.and(query3, query5);
                    break;
                case ">":
                    String str = (appliance + "." + size);
                    query5 = Filters.exists(str, true);
                    query = Filters.and(query3, query5);
                    break;
                case "<":
                    String str2 = (appliance + "." + s);
                    query5 = Filters.exists(str2, false);
                    query = Filters.and(query3, query5);
                    break;
                default:
                    query = query3;
                    break;
            }


            if (id.equals("")) {
                String a = ("$" + appliance);
                Bson aggregate = Aggregates.addFields(new Field("Models", new Document("$size", a)));
                if(onlyId.equals(true)){ modelCollection.find(query).projection(fields(include("installationId"),excludeId())).iterator().forEachRemaining(models::add); }
                else{ modelCollection.aggregate(Arrays.asList(Aggregates.match(query),Aggregates.project(fields(query4,excludeId())),aggregate)).iterator().forEachRemaining(models::add); }}
            else {modelCollection.find(Filters.and(query,eq("installationId", id))).projection(fields(query4,excludeId())).iterator().forEachRemaining(models::add);}
        }
        return models;

    }
    @Override
    public List<Object> findPhaseMaps(String id){
        List models = new ArrayList();
        Bson query = Filters.exists("modelsPerPhaseMap",true);
        if (id.equals("")){
            modelCollection.find(query).projection(fields(include("modelsPerPhaseMap","installationId"),excludeId())).
                    iterator().forEachRemaining(models::add);
        } else{
            modelCollection.find(Filters.and(query,eq("installationId", id))).projection(fields(include("modelsPerPhaseMap","installationId"),excludeId())).
                    iterator().forEachRemaining(models::add);

        }

        return models;
    }

    @Override
    public List<Object> date(String date,String d, String when, Boolean id) {
        List models = new ArrayList();
        Bson query;

        if (Objects.equals(when, "before")){
             query = Filters.lte(date,d);}
        else {
             query =Filters.gte(date,d);}

        if(id==true) {
            modelCollection.find(query).projection(fields(include("installationId"),excludeId())).
                    iterator().forEachRemaining(models::add);
        }
        else{
            modelCollection.find(query).projection(exclude("v","_id")).
                    iterator().forEachRemaining(models::add);
        }
        return models;

    }

    @Override
    public List<Object> applianceDate(String appliance, String date, String when, Boolean id) {
        List models = new ArrayList();
        Bson query;

        if (Objects.equals(when, "before")){
            query = Filters.lte(appliance,date);}
        else {
            query =Filters.gte(appliance,date);}

        if(id==true) {
            modelCollection.find(query).projection(fields(include("installationId"),excludeId())).iterator().forEachRemaining(models::add);
        }
        else{
            modelCollection.find(query).projection(exclude("v","_id")).iterator().forEachRemaining(models::add);
        }
        return models;
    }

}
