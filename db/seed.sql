create table danger_zone_user (
  dz_user serial primary key,
  email varchar(250) not null,
  hash varchar(250) not null unique
);