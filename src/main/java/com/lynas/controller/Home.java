package com.lynas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by sazzad on 12/23/15.
 */
@Controller
public class Home {
    @RequestMapping(value = "/")
    public String login(){

        return "index";
    }
}
