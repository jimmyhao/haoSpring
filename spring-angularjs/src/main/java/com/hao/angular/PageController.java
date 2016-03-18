package com.hao.angular;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by pp79092 on 1/15/2016.
 */
@Controller
public class PageController {
    Logger logger = LoggerFactory.getLogger(PageController.class);

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        logger.debug("show index ");
        return "index";
    }

    @RequestMapping(value = "/pages/**", method = RequestMethod.GET)
    public String pages() {
        return index();
    }
}

