package com.hao.angular;

/**
 * Created by pp79092 on 1/15/2016.
 */
public class TestEntity {

    private String id;
    private String name;
    private String email;

    public TestEntity() {
    }

    public TestEntity(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
