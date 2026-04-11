// notifySelfEvolutionResults.js
// Emails latest dashboard and proposed improvements from self-evolution cycle.

import nodemailer from 'nodemailer';
import { SelfEvolutionEngine } from '../agents/SelfEvolutionEngine.js';

const recipient = process.env.SELF_EVOLUTION_RECIPIENT || 'magicmizo023@gmail.com';

function buildBody(result) {
  return [
    result.dashboard,
    '',
    'Detected Weaknesses:',
    ...result.weaknesses.map((item) => `- [${item.severity.toUpperCase()}] ${item.summary}`),
    '',
    'Improvement Proposals:',
    ...result.suggestions.map((item) => `- ${item}`),
    '',
    `Memory: ${result.memoryPath}`,
  ].join('\n');
}

async function main() {
  const result = SelfEvolutionEngine.runCycle({ write: false });
  const body = buildBody(result);

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('SMTP credentials not set, printing report instead of sending email.');
    console.log(body);
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: recipient,
    subject: 'Mizo Universe — Self-Evolution System Status',
    text: body,
  });

  console.log('Self-evolution status sent:', info.response);
}

main().catch((error) => {
  console.error('Failed to notify self-evolution results:', error);
  process.exitCode = 1;
});
