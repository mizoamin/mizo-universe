<?php

declare(strict_types=1);

namespace App\Prompts;

use Mcp\Capability\Attribute\CompletionProvider;
use Mcp\Capability\Attribute\McpPrompt;

/**
 * Code-related prompt generators exposed as MCP prompts.
 */
final class CodePrompts
{
    /**
     * Generates a structured code review prompt.
     *
     * @param string $language The programming language of the code
     * @param string $code     The code snippet to review
     * @param string $focus    The review focus area
     *
     * @return array<int, array{role: string, content: string}> Prompt messages
     */
    #[McpPrompt(name: 'code_review')]
    public function reviewCode(
        #[CompletionProvider(values: ['php', 'javascript', 'typescript', 'python', 'go', 'rust'])]
        string $language,
        string $code,
        #[CompletionProvider(values: ['security', 'performance', 'style', 'correctness', 'general'])]
        string $focus = 'general',
    ): array {
        return [
            [
                'role'    => 'assistant',
                'content' => 'You are an expert code reviewer with deep knowledge of software engineering best practices.',
            ],
            [
                'role'    => 'user',
                'content' => "Please review the following {$language} code, focusing on {$focus}:\n\n```{$language}\n{$code}\n```",
            ],
        ];
    }

    /**
     * Generates a prompt for explaining a piece of code.
     *
     * @param string $code     The code to explain
     * @param string $language The programming language
     * @param string $level    The explanation detail level
     *
     * @return array<int, array{role: string, content: string}> Prompt messages
     */
    #[McpPrompt(name: 'explain_code')]
    public function explainCode(
        string $code,
        #[CompletionProvider(values: ['php', 'javascript', 'typescript', 'python', 'go', 'rust'])]
        string $language = 'php',
        #[CompletionProvider(values: ['beginner', 'intermediate', 'expert'])]
        string $level = 'intermediate',
    ): array {
        return [
            [
                'role'    => 'assistant',
                'content' => "You are a patient and thorough programming tutor targeting a {$level} audience.",
            ],
            [
                'role'    => 'user',
                'content' => "Explain the following {$language} code in a way that is appropriate for a {$level}:\n\n```{$language}\n{$code}\n```",
            ],
        ];
    }

    /**
     * Generates a prompt for creating a unit test.
     *
     * @param string $code      The code to write a test for
     * @param string $framework The test framework to use
     *
     * @return array<int, array{role: string, content: string}> Prompt messages
     */
    #[McpPrompt(name: 'generate_test')]
    public function generateTest(
        string $code,
        #[CompletionProvider(values: ['phpunit', 'jest', 'pytest', 'go-test'])]
        string $framework = 'phpunit',
    ): array {
        return [
            [
                'role'    => 'assistant',
                'content' => "You are an expert in test-driven development and writing comprehensive {$framework} tests.",
            ],
            [
                'role'    => 'user',
                'content' => "Write a complete and thorough {$framework} test suite for the following code:\n\n```\n{$code}\n```\n\nInclude happy path, edge cases, and error conditions.",
            ],
        ];
    }
}
