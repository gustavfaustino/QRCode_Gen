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
- 🔹 **Integração com AWS S3** para persistência dos QR Codes

---

## 🏗️ Arquitetura & Tecnologias

### 🔧 Backend – Java + Spring Boot (API RESTful)

- **Java 21** com **Spring Boot 3.x**
- **Google ZXing** para geração dos QR Codes
- **AWS SDK S3** para upload e disponibilização pública das imagens
- **Docker** para conteinerização e entrega contínua
- **Maven** como gerenciador de dependências
- **Endpoint principal**: `POST /qrcode` — recebe um texto/URL e retorna o link público da imagem

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

  * **Backend na AWS Elastic Beanstalk:** A API Spring Boot é conteinerizada com Docker e implantada no Elastic Beanstalk. Isso permite um gerenciamento simplificado de instâncias EC2, Load Balancers e Security Groups, aproveitando a Free Tier da AWS. O Amazon ECR é utilizado para armazenar a imagem Docker do backend.
  * **Frontend no Vercel:** A interface do usuário React é implantada no Vercel, que oferece builds rápidos, deploy contínuo a partir do GitHub e hospedagem de alta performance para aplicações estáticas e Serverless Functions.
  * **Comunicação Segura:** A comunicação entre o frontend (Vercel) e o backend (Elastic Beanstalk) é estabelecida de forma segura, com o backend configurado para lidar com requisições CORS e a transição para HTTPS em progresso para garantir a segurança do "mixed content".

---

## 📎 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---