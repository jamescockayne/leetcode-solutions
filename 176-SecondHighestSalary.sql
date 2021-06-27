/* Write a SQL query to get the second highest salary from the Employee table. */

SELECT Max(Salary) as SecondHighestSalary
FROM Employee
WHERE Salary < (SELECT Max(Salary) from Employee)