package com.gustavdev.qrcode.gen.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gustavdev.qrcode.gen.dtos.qrcode.QrCodeGenerateResponse;
import com.gustavdev.qrcode.gen.dtos.qrcode.QrCodeGeneratorRequest;

@RestController
@RequestMapping("/qrcode")
public class QrCodeController {

    @PostMapping
    public ResponseEntity<QrCodeGenerateResponse> generate(@RequestBody QrCodeGeneratorRequest request){
        return null;
    }
}
