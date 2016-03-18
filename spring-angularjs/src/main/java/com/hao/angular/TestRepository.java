package com.hao.angular;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import static java.util.stream.IntStream.range;

/**
 * Created by pp79092 on 1/15/2016.
 */
@Service
public class TestRepository {

    private static final List<TestEntity> entities =
            range(1, 21).mapToObj(i -> new TestEntity(String.valueOf(i), String.format("test-%s", i), String.format("test-%s@test.com", i)))
            .collect(Collectors.toList());

    public Optional<TestEntity> find(String id) {
        return entities.stream().filter(te -> te.getId().equals(id)).findFirst();
    }

    public List<TestEntity> findAll() {
        return entities;
    }

}

