CREATE TABLE `users` (
	`userId` text PRIMARY KEY NOT NULL,
	`COPS` integer DEFAULT false,
	`theQuantClub` integer DEFAULT false,
	`bizClub` integer DEFAULT false,
	`SAE` integer DEFAULT false,
	`AMC` integer DEFAULT false,
	`astroClub` integer DEFAULT false,
	`csi` integer DEFAULT false,
	`robotics` integer DEFAULT false
);
