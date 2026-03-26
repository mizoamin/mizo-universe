#!/usr/bin/env php
<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Mcp\Server;
use Mcp\Server\Transport\StdioTransport;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Cache\Psr16Cache;

// Setup PSR-16 discovery cache using the filesystem adapter
$cache = new Psr16Cache(
    new FilesystemAdapter('mcp-discovery', 3600, __DIR__ . '/cache')
);

// Build the MCP server with attribute-based discovery and caching
$server = Server::builder()
    ->setServerInfo('Mizo Universe MCP Server', '1.0.0', 'MCP server for the Mizo Universe ecosystem')
    ->setDiscovery(
        basePath: __DIR__,
        scanDirs: ['src/Tools', 'src/Resources', 'src/Prompts'],
        excludeDirs: ['vendor', 'tests', 'cache'],
        cache: $cache,
    )
    ->build();

// Run with stdio transport (compatible with Claude Desktop and other MCP clients)
$transport = new StdioTransport();
$server->run($transport);
