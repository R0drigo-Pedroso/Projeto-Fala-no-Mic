-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Fev-2023 às 09:55
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.1.12

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`id`, `titulo`, `descricao`, `capaevento`, `endereco`, `dia`, `horario`, `perfilId`) VALUES
(1, 'O show do Christopreto', 'Salve salve, galera. Venho aqui convidar à todos para a apresentação do meu novo álbum.  Não percam esse evento com muita musicalidade e rimas!', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F5e48dce2-00aa-4a1d-a429-75faa0885fee.jpeg?alt=media&token=1bd069a6-4d35-4ccd-ac90-c159446f7ae1', 'Rua Hélio Trida, 165, Bairro: Silvia, Francisco Morato, SP', '15/03/2023', '19:00', 56),
(2, 'Baile do Frank Ocean', 'Evento que reúne diversas músicas e artistas do h\nHip Hop internacional e nacional.', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/eventos%2F6f88d50e-eb07-4cbb-a426-9f0afa5b171b.jpeg?alt=media&token=c3a076b1-7698-4840-ae81-f448973f1c65', 'Fratique Coutinho, 00', '25/03/2023', '14:25', 57);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `perfil`
--

INSERT INTO `perfil` (`id`, `nome`, `email`, `fotoperfil`, `descricaoperfil`, `capa`) VALUES
(56, 'Christofer', 'christopreto@gmail.com', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F5dd6a6e4-03de-4846-8136-02fdf46e7bdd.jpeg?alt=media&token=8e429a17-6c5c-4d5c-82ee-dceeaea57111', 'Artista, compositor', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F4ff52dad-08e8-4ae2-ac15-2a4d3a859b5c.jpeg?alt=media&token=89a3a666-f3b2-4e47-88aa-53bc0e64beec'),
(57, 'Baile do Frank', 'bailedofrank@gmail.com', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F91ca5cbc-88af-40b7-9d63-4d6d2ee34301.jpeg?alt=media&token=f32db95e-241a-4f64-88f2-433fc4d4887e', '', 'https://firebasestorage.googleapis.com/v0/b/falanomic-e8ea9.appspot.com/o/capa%2F12ac5e7c-1ff8-4a48-a440-9da96ea41c30.jpeg?alt=media&token=0f3d9901-b997-4af0-9859-2048d63606ff');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rede`
--

CREATE TABLE `rede` (
  `id` int(11) NOT NULL,
  `deezer` varchar(300) DEFAULT NULL,
  `youtube` varchar(300) NOT NULL,
  `spotify` varchar(300) NOT NULL,
  `soundcloud` varchar(300) NOT NULL,
  `instagram` varchar(300) NOT NULL,
  `perfilId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `rede`
--

INSERT INTO `rede` (`id`, `deezer`, `youtube`, `spotify`, `soundcloud`, `instagram`, `perfilId`) VALUES
(1, '', 'https://youtu.be/azcxGnK0_Vk', '', '', '', 56);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de tabela `rede`
--
ALTER TABLE `rede`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
