<?php

declare(strict_types=1);

namespace App\Tools;

use Mcp\Capability\Attribute\McpTool;
use Mcp\Capability\Attribute\Schema;
use Mcp\Exception\ToolCallException;

/**
 * Basic arithmetic calculator exposed as MCP tools.
 */
final class Calculator
{
    /**
     * Adds two numbers together.
     *
     * @param float $a The first operand
     * @param float $b The second operand
     *
     * @return float The sum of a and b
     */
    #[McpTool(name: 'add')]
    public function add(float $a, float $b): float
    {
        return $a + $b;
    }

    /**
     * Subtracts b from a.
     *
     * @param float $a The first operand
     * @param float $b The second operand
     *
     * @return float The difference of a and b
     */
    #[McpTool(name: 'subtract')]
    public function subtract(float $a, float $b): float
    {
        return $a - $b;
    }

    /**
     * Multiplies two numbers together.
     *
     * @param float $a The first operand
     * @param float $b The second operand
     *
     * @return float The product of a and b
     */
    #[McpTool(name: 'multiply')]
    public function multiply(float $a, float $b): float
    {
        return $a * $b;
    }

    /**
     * Divides a by b.
     *
     * @param float $a The dividend
     * @param float $b The divisor
     *
     * @return float The quotient of a and b
     *
     * @throws ToolCallException if b is zero
     */
    #[McpTool(name: 'divide')]
    public function divide(float $a, float $b): float
    {
        if (0.0 === $b) {
            throw new ToolCallException('Division by zero is not allowed.');
        }

        return $a / $b;
    }

    /**
     * Raises a base to a given exponent.
     *
     * @param float $base     The base value
     * @param float $exponent The exponent value
     *
     * @return float The result of base raised to the exponent
     */
    #[McpTool(name: 'power')]
    public function power(float $base, float $exponent): float
    {
        return $base ** $exponent;
    }

    /**
     * Computes the square root of a non-negative number.
     *
     * @param float $value The value to compute the square root of
     *
     * @return float The square root of the value
     *
     * @throws ToolCallException if value is negative
     */
    #[McpTool(name: 'sqrt')]
    public function squareRoot(
        #[Schema(minimum: 0)]
        float $value,
    ): float {
        if ($value < 0.0) {
            throw new ToolCallException('Cannot compute square root of a negative number.');
        }

        return sqrt($value);
    }
}
