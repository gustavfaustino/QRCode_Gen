package com.gustavdev.qrcode.gen;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://qr-code-gen-lyart.vercel.app/", "https://qr-code-gen-gustavo-faustinos-projects.vercel.app/")// Allow requests from your React app's origin
                .allowedMethods("POST","OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
