<?php

declare(strict_types=1);

namespace Tests\Tools;

use App\Tools\FileManager;
use Mcp\Exception\ToolCallException;
use PHPUnit\Framework\TestCase;

final class FileManagerTest extends TestCase
{
    private FileManager $manager;

    protected function setUp(): void
    {
        $this->manager = new FileManager();
    }

    public function testReadFileReturnsContent(): void
    {
        $tmpFile = tempnam(sys_get_temp_dir(), 'mcp_test_');
        file_put_contents($tmpFile, 'hello world');

        try {
            $content = $this->manager->readFile($tmpFile);
            $this->assertSame('hello world', $content);
        } finally {
            unlink($tmpFile);
        }
    }

    public function testReadFileMissingThrowsException(): void
    {
        $this->expectException(ToolCallException::class);
        $this->expectExceptionMessage('File not found:');

        $this->manager->readFile('/nonexistent/path/file.txt');
    }

    public function testValidateEmailReturnsTrueForValidEmail(): void
    {
        $this->assertTrue($this->manager->validateEmail('user@example.com'));
        $this->assertTrue($this->manager->validateEmail('user+tag@sub.example.co.uk'));
    }

    public function testValidateEmailReturnsFalseForInvalidEmail(): void
    {
        $this->assertFalse($this->manager->validateEmail('not-an-email'));
        $this->assertFalse($this->manager->validateEmail('missing@'));
        $this->assertFalse($this->manager->validateEmail('@nodomain.com'));
    }

    public function testStatPathForExistingFile(): void
    {
        $tmpFile = tempnam(sys_get_temp_dir(), 'mcp_stat_');

        try {
            $stat = $this->manager->statPath($tmpFile);
            $this->assertTrue($stat['exists']);
            $this->assertSame('file', $stat['type']);
            $this->assertIsInt($stat['size']);
        } finally {
            unlink($tmpFile);
        }
    }

    public function testStatPathForMissingPath(): void
    {
        $stat = $this->manager->statPath('/nonexistent/path');

        $this->assertFalse($stat['exists']);
        $this->assertNull($stat['type']);
        $this->assertNull($stat['size']);
        $this->assertFalse($stat['readable']);
    }

    public function testStatPathForDirectory(): void
    {
        $stat = $this->manager->statPath(sys_get_temp_dir());

        $this->assertTrue($stat['exists']);
        $this->assertSame('directory', $stat['type']);
        $this->assertNull($stat['size']);
    }
}
