INSERT INTO departments (name)
VALUES  ("Grocery"),
        ("Meat"),
        ("Deli"),
        ("Produce"),
        ("Maintenance");
       
INSERT INTO roles (title, salary, department_id)
VALUES  ("Stocker", 10000.00, 1),
        ("Cashier", 11000.00, 1),
        ("Wrapper", 15000.00, 2),
        ("Cutter", 20000.00, 2),
        ("Counter", 12000.00, 3),
        ("Production", 13000.00, 3),
        ("Slicer", 14000.00, 4),
        ("Thrower", 16000.00, 4),
        ("Carts", 10000.00, 5),
        ("Janitor", 12000.00, 5),
        ("Store Manager", 50000.00, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Johnson", 11, 1),
        ("Jacob", "Jacobson", 1, 1),
        ("Jingleheimer", "Jingleheimerson", 2, 1),
        ("Schmidt", "Schmidtson", 3, 1),
        ("Hisname", "Ismyname", 4, 1),
        ("Toooo", "oooo", 5, 1),
        ("Wheneverigoout", "Thepeoplealwaysshout", 6, 1),
        ("Theregoes", "John", 7, 1),
        ("Jacob", "Jingleheimer", 8, 1),
        ("Schmidt", "Dadah", 9, 1),
        ("Lala", "Ladahdah", 10, 1);
