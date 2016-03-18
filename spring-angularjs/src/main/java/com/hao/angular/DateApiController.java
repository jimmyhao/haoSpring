package com.hao.angular;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * Created by pp79092 on 1/15/2016.
 */
@RestController
@RequestMapping("/api/date")
public class DateApiController {

    @RequestMapping(value = "/now", method = RequestMethod.GET)
    public Date now() {
        return new Date();
    }
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello() {
        return "Greeting from Spring Boot rest";
    }
}
