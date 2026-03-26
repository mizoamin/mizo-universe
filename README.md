# mizo-universe
official digital ecosystem of Captain Mizo Amin. A hyper-realistic 3D solar system portfolio blending sports, business, and technology.

## MCP Server

This repository includes a PHP Model Context Protocol (MCP) server built with the [official PHP MCP SDK](https://github.com/modelcontextprotocol/php-sdk) and attribute-based discovery.

### Requirements

- PHP 8.2+
- Composer

### Installation

```bash
composer install
```

### Running the Server

```bash
php server.php
```

### Claude Desktop Integration

Add the following to your Claude Desktop configuration (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "mizo-universe": {
      "command": "php",
      "args": ["/absolute/path/to/server.php"]
    }
  }
}
```

### Available Capabilities

**Tools** (via `src/Tools/`):
- `add`, `subtract`, `multiply`, `divide`, `power`, `sqrt` — arithmetic operations
- `read_file` — reads a file from the filesystem
- `validate_email` — validates an email address format
- `stat_path` — checks a filesystem path's existence and type

**Resources** (via `src/Resources/`):
- `config://app/settings` — application configuration
- `health://status` — server health status
- `user://{userId}/profile` — user profile (resource template)

**Prompts** (via `src/Prompts/`):
- `code_review` — structured code review prompt
- `explain_code` — code explanation prompt
- `generate_test` — unit test generation prompt

### Testing

```bash
composer test
```

### Architecture

The server uses attribute-based discovery to automatically register capabilities:

```php
#[McpTool(name: 'add')]
public function add(float $a, float $b): float
{
    return $a + $b;
}
```

Discovery results are cached using PSR-16 (`symfony/cache`) for production performance.
