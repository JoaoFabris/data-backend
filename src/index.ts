const challenge = process.argv[2];

if (!challenge) {
  console.error("Usage: npm run challenge <number>");
  process.exit(1);
}

try {
  require(`./challenges/challenge-${challenge}`);
} catch {
  console.error(`Challenge ${challenge} not found`);
  process.exit(1);
}
