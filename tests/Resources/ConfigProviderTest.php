<?php

declare(strict_types=1);

namespace Tests\Resources;

use App\Resources\ConfigProvider;
use Mcp\Exception\ResourceReadException;
use PHPUnit\Framework\TestCase;

final class ConfigProviderTest extends TestCase
{
    private ConfigProvider $provider;

    protected function setUp(): void
    {
        $this->provider = new ConfigProvider();
    }

    public function testGetSettingsReturnsExpectedKeys(): void
    {
        $settings = $this->provider->getSettings();

        $this->assertArrayHasKey('version', $settings);
        $this->assertArrayHasKey('debug', $settings);
        $this->assertArrayHasKey('locale', $settings);
        $this->assertArrayHasKey('timezone', $settings);
    }

    public function testGetSettingsDebugIsFalseByDefault(): void
    {
        $settings = $this->provider->getSettings();

        $this->assertFalse($settings['debug']);
    }

    public function testGetHealthStatusReturnsOk(): void
    {
        $health = $this->provider->getHealthStatus();

        $this->assertSame('ok', $health['status']);
        $this->assertSame(PHP_VERSION, $health['php_version']);
    }

    public function testGetUserProfileReturnsExistingUser(): void
    {
        $profile = $this->provider->getUserProfile('alice');

        $this->assertSame('Alice', $profile['name']);
        $this->assertSame('alice@example.com', $profile['email']);
        $this->assertSame('admin', $profile['role']);
    }

    public function testGetUserProfileForAllPredefinedUsers(): void
    {
        foreach (['alice', 'bob', 'carol'] as $userId) {
            $profile = $this->provider->getUserProfile($userId);
            $this->assertArrayHasKey('name', $profile);
            $this->assertArrayHasKey('email', $profile);
            $this->assertArrayHasKey('role', $profile);
        }
    }

    public function testGetUserProfileThrowsForUnknownUser(): void
    {
        $this->expectException(ResourceReadException::class);
        $this->expectExceptionMessage('User not found: unknown_user');

        $this->provider->getUserProfile('unknown_user');
    }
}
