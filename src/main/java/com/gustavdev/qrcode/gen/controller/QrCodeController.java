package com.gustavdev.qrcode.gen.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.gustavdev.qrcode.gen.dtos.qrcode.QrCodeGeneratorRequest;

@RestController
@RequestMapping("/qrcode")
public class QrCodeController {

    @PostMapping
    public ResponseEntity<> generate(@RequestBody QrCodeGeneratorRequest request){

    }
}
