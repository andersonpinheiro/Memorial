CREATE DATABASE IF NOT EXISTS memorial;

USE memorial;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE memoriais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_falecido VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    data_falecimento DATE,
    biografia TEXT,
    foto VARCHAR(255),
    cidade VARCHAR(100),
    slug VARCHAR(200),
    criado_por INT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (criado_por) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    memorial_id INT,
    nome_visitante VARCHAR(100),
    mensagem TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (memorial_id) REFERENCES memoriais(id)
);

CREATE TABLE velas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    memorial_id INT,
    nome_visitante VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (memorial_id) REFERENCES memoriais(id)
);