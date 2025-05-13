# Spring Boot Full Stack Application

Questa applicazione è un progetto di Full Stack Development realizzato con:

- **Java + Spring Boot** (Backend)
- **MySQL** (Database)
- **HTML, CSS, JavaScript** (Frontend)

---

## 📌 Funzionalità Principali
- **Registrazione di nuovi iscritti** tramite un form HTML
- **Visualizzazione degli iscritti** in una tabella dinamica
- **Modifica e cancellazione** di un iscritto tramite API REST
- **Chiamate API** integrate tramite `fetch` in JavaScript

---

## 🗃️ **Struttura del Progetto**
```
src/main/java
└── com.example.prova001
    ├── controller
    │   └── IscrittoController.java
    ├── model
    │   └── Iscritto.java
    ├── repository
    │   └── IscrittoRepository.java
    ├── service
    │   └── IscrittoService.java
    └── Prova001Application.java

src/main/resources/static
├── index.html
├── menu.html
└── js
    ├── main.js
    └── menu.js
```

---

## 🔧 **Configurazione del Database**
Assicurati di avere MySQL configurato e un database chiamato `PROVA001`.

```sql
CREATE DATABASE PROVA001;
```

Nel file `application.properties`, configura l'accesso al database:

```
spring.datasource.url=jdbc:mysql://localhost:3306/PROVA001
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 🚀 **Avvio dell'applicazione**
Per avviare l'applicazione:

```bash
./mvnw spring-boot:run
```

Visita il sito:
```
http://localhost:8080/menu.html
```

---

## 📌 **API Endpoints**
- `GET /api/iscritti` → Ottiene tutti gli iscritti
- `GET /api/iscritti/{id}` → Ottiene un iscritto specifico tramite ID
- `POST /api/iscritto` → Aggiunge un nuovo iscritto
- `PUT /api/iscritti/{id}` → Modifica un iscritto
- `DELETE /api/iscritti/{id}` → Elimina un iscritto

---

## 📌 **Tecnologie Utilizzate**
- Java 17
- Spring Boot 3.x
- MySQL 8
- HTML5 & CSS3
- JavaScript (fetch API)
- Bootstrap 5

---

## 👨‍💻 **Autore**
Emiliano Cerchiaro

LinkedIn: [Profilo LinkedIn](https://www.linkedin.com/in/emiliano-cerchiaro)


---

## 📌 **Note aggiuntive**
Se riscontri problemi, assicurati di:
- Controllare che il database sia attivo
- Verificare le configurazioni nel file `application.properties`
- Controllare i log di Spring Boot nel terminale
