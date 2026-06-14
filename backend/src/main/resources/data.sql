-- Only data, no CREATE TABLE
INSERT INTO roles (name) VALUES ('admin'), ('librarian'), ('user')
ON CONFLICT (name) DO NOTHING;

INSERT INTO books (title, author, summary, publication_date, total_quantity, available_quantity) VALUES 
('The Great Gatsby', 'F. Scott Fitzgerald', 'A story of the Jazz Age and the American Dream', '1925-04-10', 3, 3),
('To Kill a Mockingbird', 'Harper Lee', 'A classic of modern American literature', '1960-07-11', 4, 4),
('Pride and Prejudice', 'Jane Austen', 'A romantic novel of manners', '1813-01-28', 2, 2);
ON CONFLICT DO NOTHING;
