-- Sample employees for the demo setup (docker-compose.yml).
-- MySQL runs this only when the database volume is empty.
CREATE TABLE IF NOT EXISTS employees (
    id BIGINT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email_id VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, email_id) VALUES
    ('Amira', 'Ben Salah', 'amira.bensalah@example.com'),
    ('Youssef', 'Trabelsi', 'youssef.trabelsi@example.com'),
    ('Sarah', 'Martin', 'sarah.martin@example.com'),
    ('Karim', 'Haddad', 'karim.haddad@example.com'),
    ('Lina', 'Jaziri', 'lina.jaziri@example.com');
