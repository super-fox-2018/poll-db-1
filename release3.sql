-- query 1

SELECT name, party, grade_current 
FROM politicians
WHERE party = 'R' AND grade_current BETWEEN 9 AND 11;

-- query 2

SELECT COUNT(*) AS totalVote, politicians.name FROM politicians
INNER JOIN votes
ON politicians.id = votes.politician_id
WHERE politician_id = (SELECT id FROM politicians WHERE name = 'Olympia Snowe');

-- query 3

SELECT politicians.name, COUNT(*) AS totalVote
FROM politicians
INNER JOIN votes
ON politicians.id = votes.politician_id
WHERE politicians.name LIKE '%Adam%'
GROUP BY 1;

-- query 4

SELECT politicians.name, politicians.party, COUNT(*) AS totalVote
FROM politicians
INNER JOIN votes
ON politicians.id = votes.politician_id
GROUP BY 1
ORDER BY 3 DESC
LIMIT 3;


-- query 5

SELECT voters.* FROM voters
INNER JOIN votes
ON voters.id = votes.voter_id
WHERE votes.politician_id = (SELECT id FROM politicians WHERE name = 'Olympia Snowe');