--DML

USE ProjetoInicial
GO

INSERT INTO Usuario(nome, email, senha)
VALUES			   ('adm', 'adm@adm.com', 'adm123')
GO

INSERT INTO Sala(andar, nome, metragem)
VALUES			(1, 'sala A', 25),
				(1, 'sala B', 12),
				(2, 'sala C', 10)
GO

INSERT INTO Equipamento(idSala, marca, tipoDeEquipamento, numeroDeSerie,
						descricao, numeroDePatrimonio, ativoPassivo)
VALUES					(3, 'dell', 'notebook', '376A23C', 'note da dell', 'IMP301', 1),
						(2, 'lenovo', 'notebook', '4F13A47', 'note da lenovo', 'IMP302', 1),
						(1, 'acer', 'projetor', '13B4618', 'projetor da acer', 'IMP303', 1),
						(1, 'sumay', 'tela', '8C69D71', 'tela para projetor', 'IMP304', 2)
GO