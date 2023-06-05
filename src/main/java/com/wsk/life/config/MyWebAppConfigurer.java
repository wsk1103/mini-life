/*
package com.wsk.life.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

*/
/**
 * @author sk
 * @date 2022/5/1
 * @description 描述
 *//*

@Configuration
@EnableWebMvc
public class MyWebAppConfigurer implements WebMvcConfigurer {

    @Autowired
    private FileConfig fileConfig;


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/image/**", "/css/**", "/js/**", "/img/**")
                .addResourceLocations("classpath:/static/image/", "classpath:/static/css/",
                        "classpath:/static/js/", "classpath:/static/img/");
        String saveFile = "file:" + fileConfig.getSaveImages();
        registry.addResourceHandler("/images/**").addResourceLocations(saveFile);
        WebMvcConfigurer.super.addResourceHandlers(registry);
    }
}
*/
