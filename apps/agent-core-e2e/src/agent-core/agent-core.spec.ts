import { execSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), "apps/agent-core/dist/main.js");

    // Set test environment variable
    const output = execSync(`node ${cliPath}`, {
      env: {
        ...process.env,
        GOOGLE_API_KEY: 'test-api-key'
      }
    }).toString();

    expect(output).toMatch(/Hello World/);
  });
});

