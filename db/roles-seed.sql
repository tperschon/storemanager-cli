-- Seed roles for department 1 (corporate officers)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (101, "Chief Executive Officer", 1000000.00, 1),
            (102, "Chief Financial Officer", 1000000.00, 1),
            (103, "Chief Operating Officer", 1000000.00, 1),
            (104, "Chief Legal Officer", 1000000.00, 1),
            (105, "Chief Information Officer", 1000000.00, 1);

-- Seed roles for department 2 (management)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (201, "Human Resources Manager", 500000.00, 2),
            (202, "Production Manager", 500000.00, 2),
            (203, "Quality Assurance Manager", 500000.00, 2),
            (204, "Sales Manager", 500000.00, 2),
            (205, "Public Relations Manager", 500000.00, 2),
            (206, "Accounting Manager", 500000.00, 2),
            (207, "Legal Manager", 500000.00, 2);

-- Seed roles for department 3 (human resources)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (301, "Human Resources Administrator", 250000.00, 3),
            (302, "Recruiter", 200000.00, 3),
            (303, "Training Coordinator", 200000.00, 3);

-- Seed roles for department 4 (production)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (401, "Production Administrator", 250000.00, 4),
            (402, "Production Team Lead", 225000.00, 4),
            (403, "Field Engineer", 200000.00, 4),
            (404, "Engineer", 200000.00, 4);

-- Seed roles for department 5 (quality assurance)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (501, "QA Administrator", 250000.00, 5),
            (502, "QA Team Lead", 225000.00, 5),
            (503, "QA Team Member", 150000.00, 5);

-- Seed roles for department 6 (sales)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (601, "Sales Administrator", 250000.00, 6),
            (602, "Sales Team Lead", 225000.00, 6),
            (603, "Sales Team Member", 150000.00, 6);

-- Seed roles for department 7 (public relations)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (701, "PR Administrator", 250000.00, 7),
            (702, "PR Team Lead", 225000.00, 7),
            (703, "PR Team Member", 150000.00, 7);

-- Seed roles for department 8 (accounting)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (801, "Accounting Administrator", 250000.00, 8),
            (802, "Accountant", 200000.00, 8),
            (803, "Bookkeeper", 150000.00, 8);

-- Seed roles for department 9 (legal)
INSERT INTO role (id, title, salary, department_id)
    VALUES  (901, "Counsel", 300000.00, 9),
            (902, "Paralegal", 150000.00, 9);

-- Seed roles for interns
INSERT INTO role (id, title, salary, department_id)
    VALUES  (399, "HR Intern", 0.00, 3),
            (499, "Production Intern", 0.00, 4),
            (599, "QA Intern", 0.00, 5),
            (699, "Sales Intern", 0.00, 6),
            (799, "PR Intern", 0.00, 7),
            (899, "Accounting Intern", 0.00, 8),
            (999, "Legal Intern", 0.00, 9);