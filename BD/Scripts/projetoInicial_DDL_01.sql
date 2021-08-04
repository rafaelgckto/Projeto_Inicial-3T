--DDL

CREATE DATABASE ProjetoInicial
GO

USE ProjetoInicial
GO

CREATE TABLE Usuario
(
	idUsuario		INT PRIMARY KEY IDENTITY,
	nome			VARCHAR(50) NOT NULL,
	email			VARCHAR(50) NOT NULL UNIQUE,
	senha			VARCHAR(50) NOT NULL
)
GO

CREATE TABLE Sala
(
	idSala			INT PRIMARY KEY IDENTITY,
	andar			FLOAT NOT NULL,
	nome			VARCHAR(50) NOT NULL,
	metragem		INT NOT NULL
)
GO

CREATE TABLE Equipamento
(
	idEquipamento		INT PRIMARY KEY IDENTITY,
	idSala				INT FOREIGN KEY REFERENCES Sala(idSala),
	marca				VARCHAR(50) NOT NULL,
	tipoDeEquipamento	VARCHAR(100) NOT NULL,
	numeroDeSerie		VARCHAR(50) NOT NULL,
	descricao			TEXT DEFAULT ('sem descricao informada'),
	numeroDePatrimonio	VARCHAR(50) NOT NULL,
	ativoPassivo		BIT NOT NULL
)
GO