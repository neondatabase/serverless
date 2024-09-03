-- this DB schema is expected by the code in src/index.ts

drop table if exists employees;

create table employees (
  id bigint primary key generated always as identity,
  first_name text not null
);

insert into employees (first_name) values ('Anne'), ('Bob'), ('Charlie');
