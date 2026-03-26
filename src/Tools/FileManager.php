<?php

declare(strict_types=1);

namespace App\Tools;

use Mcp\Capability\Attribute\McpTool;
use Mcp\Capability\Attribute\Schema;
use Mcp\Exception\ToolCallException;

/**
 * File system operations exposed as MCP tools.
 */
final class FileManager
{
    /**
     * Reads and returns the content of a file.
     *
     * @param string $path Path to the file to read
     *
     * @return string The file contents
     *
     * @throws ToolCallException if the file does not exist or is not readable
     */
    #[McpTool(name: 'read_file')]
    public function readFile(string $path): string
    {
        if (!file_exists($path)) {
            throw new ToolCallException("File not found: {$path}");
        }

        if (!is_readable($path)) {
            throw new ToolCallException("File not readable: {$path}");
        }

        $content = file_get_contents($path);
        if (false === $content) {
            throw new ToolCallException("Failed to read file: {$path}");
        }

        return $content;
    }

    /**
     * Validates an email address format.
     *
     * @param string $email The email address to validate
     *
     * @return bool True if the email is valid, false otherwise
     */
    #[McpTool(name: 'validate_email')]
    public function validateEmail(
        #[Schema(format: 'email')]
        string $email,
    ): bool {
        return false !== filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    /**
     * Checks whether a path exists and returns its type.
     *
     * @param string $path The filesystem path to check
     *
     * @return array{exists: bool, type: string|null, size: int|null, readable: bool}
     */
    #[McpTool(name: 'stat_path')]
    public function statPath(string $path): array
    {
        if (!file_exists($path)) {
            return ['exists' => false, 'type' => null, 'size' => null, 'readable' => false];
        }

        return [
            'exists' => true,
            'type' => is_dir($path) ? 'directory' : 'file',
            'size' => is_file($path) ? filesize($path) : null,
            'readable' => is_readable($path),
        ];
    }
}
