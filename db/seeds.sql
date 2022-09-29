-- Seed the departments
SOURCE department-seed.sql;
-- Seed the roles, which depends on departments
SOURCE roles-seed.sql;
-- Seed the employees, which depends on roles and itself
SOURCE employee-seed.sql;