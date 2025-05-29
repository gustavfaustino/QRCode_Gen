package com.gustavdev.qrcode.gen.ports;

public interface  StoragePort {
    String uplodFile(byte[] file, String fileName, String contentType);
}
