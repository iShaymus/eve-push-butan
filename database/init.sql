-- Delete default database
DROP DATABASE postgres;

-- Create schemas in new database
CREATE SCHEMA app;
CREATE SCHEMA app_audit;

-- Delete the default schema
DROP SCHEMA public;