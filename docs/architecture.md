# Arquitetura do Sistema - Memorial Platform

## Visão Geral

Sistema web para criação de memoriais digitais em homenagem a pessoas falecidas.

## Arquitetura

Frontend → Interface do usuário  
Backend → API REST  
Banco de dados → MySQL

## Fluxo

Usuário acessa o site
↓
Frontend envia requisição para API
↓
Backend processa regra de negócio
↓
Banco de dados armazena informações
↓
Resposta retorna ao usuário

## Estrutura do Projeto

backend
- API Node.js
- Express

frontend
- HTML
- CSS
- JavaScript

database
- MySQL
- Schema SQL