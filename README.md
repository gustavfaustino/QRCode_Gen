# 🔳 Gerador de QR Code Simples e Moderno

[🔗 Aplicação Online](https://qr-code-gen-lyart.vercel.app/) 

---

Este é um projeto **full-stack** desenvolvido para oferecer uma solução **intuitiva, responsiva e moderna** para geração de QR Codes a partir de textos ou URLs. Com um backend robusto em **Java Spring Boot** e um frontend leve e reativo com **React + TypeScript**, o sistema foi idealizado com foco em **simplicidade, performance e experiência do usuário**.

---

## ✨ Principais Funcionalidades

- 🔹 **Geração instantânea de QR Code** a partir de qualquer texto ou URL
- 🔹 **Visualização dinâmica e em tempo real** do código gerado
- 🔹 **Download rápido em formato PNG**
- 🔹 **Design minimalista** com identidade visual (`charcoal` & `lavender`)
- 🔹 **Integração com AWS S3** para persistência dos QR Codes, de até 30 dias.

---

## 🏗️ Arquitetura & Tecnologias

### 🔧 Backend – Java + Spring Boot (API RESTful)

- **Java 21** com **Spring Boot 3.x**
- **Google ZXing** para gerar os QR Codes
- **AWS SDK S3** para upload e entrega pública
- **Docker** para containerização
- **Elastic Beanstalk** com instância única (free tier)
- **Amazon API Gateway** como proxy HTTPS seguro

### 🎨 Frontend – React + TypeScript

- **React 18** com **TypeScript** para maior segurança e legibilidade
- **Vite** para builds ultrarrápidos
- **Tailwind CSS** para estilização personalizada, responsiva e minimalista
- **Radix UI** como base acessível de componentes
- **React Query** para gerenciamento assíncrono de dados
- **React Router DOM** para navegação fluida entre rotas

---

## ☁️ Implantação

A aplicação é implantada em uma arquitetura de nuvem híbrida para otimização e escalabilidade.

### 🔹 Backend
- Implantado com **Elastic Beanstalk** + Docker
- Imagem do container armazenada no **Amazon ECR**
- Protegido por **API Gateway** (HTTP API) que fornece HTTPS

### 🔹 Frontend
- Hospedado no **Vercel**
- Deploy contínuo via GitHub
- Ambiente configurado com variáveis de ambiente apontando para o endpoint seguro da API



---

## 📎 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---