/*
 * Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people
*/
select Person.FirstName, Person.LastName, Address.City, Address.State
from Person 
left join Address on Person.PersonId = Address.PersonId