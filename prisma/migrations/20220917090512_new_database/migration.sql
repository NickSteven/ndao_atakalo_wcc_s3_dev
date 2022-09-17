-- CreateTable
CREATE TABLE `Echange` (
    `id_echange` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `nom_kilalao` VARCHAR(191) NOT NULL,
    `photos` VARCHAR(191) NOT NULL,
    `atakalo` VARCHAR(191) NOT NULL,
    `statut` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Echange_id_echange_key`(`id_echange`),
    PRIMARY KEY (`id_echange`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
