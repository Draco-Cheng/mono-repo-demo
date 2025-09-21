import { spawn } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  it('should start the AI assistant', (done) => {
    const cliPath = join(process.cwd(), "apps/agent-core/dist/main.js");

    const child = spawn('node', [cliPath], {
      env: {
        ...process.env,
        GOOGLE_API_KEY: 'test-api-key'
      }
    });

    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();

      // Once we see the ready message, test passes
      if (output.includes('AI Codebase Assistant is ready!')) {
        child.kill();
        expect(output).toMatch(/AI Codebase Assistant is ready!/);
        done();
      }
    });

    child.stderr.on('data', (data) => {
      output += data.toString();
    });

    // Timeout after 10 seconds
    setTimeout(() => {
      child.kill();
      if (!output.includes('AI Codebase Assistant is ready!')) {
        done(new Error(`Expected "AI Codebase Assistant is ready!" but got: ${output}`));
      }
    }, 10000);
  });
});

