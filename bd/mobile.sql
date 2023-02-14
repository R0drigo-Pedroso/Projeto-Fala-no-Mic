-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Fev-2023 às 15:58
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mobile`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `id` int(11) NOT NULL,
  `titulo` varchar(60) NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `capaevento` varchar(300) DEFAULT NULL,
  `endereco` varchar(100) NOT NULL,
  `dia` varchar(15) NOT NULL,
  `horario` varchar(12) NOT NULL,
  `perfilId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`id`, `titulo`, `descricao`, `capaevento`, `endereco`, `dia`, `horario`, `perfilId`) VALUES
(1, 'Old Scholl', 'Chega mais, galera ', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2Feb6a78d7-c63e-4595-80a7-9119b5b3a793.jpeg?alt=media&token=d48d5424-f0ee-4cb0-8656-be954c71fc85', 'Rua B', '12/02/2023', '', 41),
(2, 'Hwuwuwuw', 'Twtwgwg', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F6cec8b7f-21f9-4439-982b-d486635c4e7f.jpeg?alt=media&token=485c32b6-d5cd-4c45-a3bb-97dc17733f2a', 'Hgh', 'Hh', '', 42),
(3, 'Old School', 'Fala fala galera', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F1efd6f84-e394-400e-9f9d-c452d412c31a.jpeg?alt=media&token=865b82d6-1ceb-406d-b406-3db97682fe73', 'Ruabs', 'Gwha', '', 41),
(4, 'Twgwgw', 'Twgwgw', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F5a10b735-b61a-45de-9cf2-e417a0b05e07.jpeg?alt=media&token=8f721d6f-4989-4e6e-b35c-b3c34509d70a', 'Hxufu', 'Cjc', '', 41),
(5, 'Hshajaha', 'Hahaha', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F7c489970-bf0e-4870-b6b5-6b2a192e9f60.jpeg?alt=media&token=1c12dca8-19d7-4294-be46-1bb1f773e7cc', 'Baba', 'Hshs', '', 43),
(6, 'Hshs', 'Haha', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2Fe5890473-e4d5-4463-9830-0d79a675f366.jpeg?alt=media&token=a54ff065-2cc2-4cb2-883e-69135a92f1e8', 'Baba', 'Ahah', '', 44),
(7, 'Hwhw', 'Ywhw', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2Fc91e7a13-2da2-4904-899b-84c5802f7e73.jpeg?alt=media&token=85cba592-493d-4f0f-a1e7-806e5f81e8c7', 'Bsbs', 'Haha', '', 44),
(8, 'Hwhw', 'Hwhwhwhwhwhwehdjejjed', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2Fa0a8e1aa-7016-45b7-bb6b-3d09f2c3a4c3.jpeg?alt=media&token=888bd96e-432c-4106-bff8-5594ce9f673a', 'Jaaj', 'Hwhwhwhw', '', 44),
(9, 'Ywhwuq', 'Hwhwhw', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F66b85082-8a55-4972-b048-a33a51ca865f.jpeg?alt=media&token=a8a67715-2f79-4e17-817d-518a85ef25e8', 'Bshs', 'Hqhw', '', 44),
(10, 'Eventualmente ', 'Gshshs', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F6bffd583-8875-4524-a5fe-2ed8f859551d.jpeg?alt=media&token=6eed280e-7ef1-40a6-a8fa-6885e279b1ef', 'Baba', 'Hwhw', '', 44),
(11, 'Hwhs', 'Hwhwhw', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2Ff83520ae-cffe-4e15-a1af-99acd85169f7.jpeg?alt=media&token=d8408bac-6e82-481e-b402-9b427e4c6ffa', 'Bebw', 'Hwhw', '', 44);

-- --------------------------------------------------------

--
-- Estrutura da tabela `perfil`
--

CREATE TABLE `perfil` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fotoperfil` varchar(300) DEFAULT NULL,
  `descricaoperfil` varchar(400) DEFAULT NULL,
  `capa` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `perfil`
--

INSERT INTO `perfil` (`id`, `nome`, `email`, `fotoperfil`, `descricaoperfil`, `capa`) VALUES
(41, '', 'adrieldias2001@hotmail.com', NULL, 'Hahaha', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2Fdd3cb64b-1835-4240-9e83-8f1a2065a233.jpeg?alt=media&token=80a426d1-535b-45ee-9e59-766f1b8ae3a3'),
(42, '', 'isabela@gmail.com', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F905bf45b-0e56-446f-bad9-339792c1ac0a.jpeg?alt=media&token=11d61fb7-1cff-4bef-b2b0-e5ccf8373b89', 'Gwwhwhwhwhhw', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F30869920-6029-4d2c-86d2-79f9dad12523.jpeg?alt=media&token=2e53eff3-c3f0-44f0-a15c-42dfe8363151'),
(43, '', 'luna@gmail.com', NULL, '', NULL),
(44, 'Klaibert', 'klaibertpatrocinio@gmail.com', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F1e6eb61e-2a9e-4d71-9dc8-c94fd25a3050.jpeg?alt=media&token=57c957e9-679c-4e89-9d34-bf6bf4cf6758', 'Hshahahahaahah', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2Ffd6f349a-0f52-4e39-bc8e-607579a88127.jpeg?alt=media&token=beaf2ed1-29dd-4467-877b-6a40ce23cf16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rede`
--

CREATE TABLE `rede` (
  `id` int(11) NOT NULL,
  `deezer` varchar(300) DEFAULT NULL,
  `spotify` varchar(300) NOT NULL,
  `youtube` varchar(300) NOT NULL,
  `soundcloud` varchar(300) NOT NULL,
  `instagram` varchar(300) NOT NULL,
  `perfilId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `rede`
--

INSERT INTO `rede` (`id`, `deezer`, `spotify`, `youtube`, `soundcloud`, `instagram`, `perfilId`) VALUES
(1, 'https://www.sunioweb.com.br', '', '', '', '', 41),
(2, 'Yhy', '', '', '', '', 42),
(3, '', '', '', '', '', 43);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_perfil_id` (`perfilId`);

--
-- Índices para tabela `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `rede`
--
ALTER TABLE `rede`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_perfilId` (`perfilId`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de tabela `rede`
--
ALTER TABLE `rede`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `fk_perfil_id` FOREIGN KEY (`perfilId`) REFERENCES `perfil` (`id`);

--
-- Limitadores para a tabela `rede`
--
ALTER TABLE `rede`
  ADD CONSTRAINT `fk_perfilId` FOREIGN KEY (`perfilId`) REFERENCES `perfil` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
