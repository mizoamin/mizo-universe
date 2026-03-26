<?php

declare(strict_types=1);

namespace App\Resources;

use Mcp\Capability\Attribute\McpResource;
use Mcp\Capability\Attribute\McpResourceTemplate;
use Mcp\Capability\Attribute\CompletionProvider;
use Mcp\Exception\ResourceReadException;

/**
 * Application configuration and user profile resources.
 */
final class ConfigProvider
{
    /**
     * Simulate a simple user database.
     *
     * @var array<string, array{name: string, email: string, role: string}>
     */
    private array $users = [
        'alice' => ['name' => 'Alice', 'email' => 'alice@example.com', 'role' => 'admin'],
        'bob'   => ['name' => 'Bob', 'email' => 'bob@example.com', 'role' => 'user'],
        'carol' => ['name' => 'Carol', 'email' => 'carol@example.com', 'role' => 'editor'],
    ];

    /**
     * Returns the application configuration settings.
     *
     * @return array{version: string, debug: bool, locale: string, timezone: string}
     */
    #[McpResource(
        uri: 'config://app/settings',
        name: 'app_config',
        description: 'Application configuration settings.',
        mimeType: 'application/json',
    )]
    public function getSettings(): array
    {
        return [
            'version'  => '1.0.0',
            'debug'    => false,
            'locale'   => 'en_US',
            'timezone' => 'UTC',
        ];
    }

    /**
     * Returns the server health status.
     *
     * @return array{status: string, uptime: int, php_version: string}
     */
    #[McpResource(
        uri: 'health://status',
        name: 'server_health',
        description: 'Current server health and runtime information.',
        mimeType: 'application/json',
    )]
    public function getHealthStatus(): array
    {
        return [
            'status'      => 'ok',
            'uptime'      => time() - $_SERVER['REQUEST_TIME_FLOAT'] ?? 0,
            'php_version' => PHP_VERSION,
        ];
    }

    /**
     * Returns the profile for a specific user.
     *
     * @param string $userId The user identifier
     *
     * @return array{name: string, email: string, role: string}
     *
     * @throws ResourceReadException if the user does not exist
     */
    #[McpResourceTemplate(
        uriTemplate: 'user://{userId}/profile',
        name: 'user_profile',
        description: 'Retrieve profile information for a specific user.',
        mimeType: 'application/json',
    )]
    public function getUserProfile(
        #[CompletionProvider(values: ['alice', 'bob', 'carol'])]
        string $userId,
    ): array {
        if (!isset($this->users[$userId])) {
            throw new ResourceReadException("User not found: {$userId}");
        }

        return $this->users[$userId];
    }
}
