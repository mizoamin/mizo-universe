<?php

declare(strict_types=1);

namespace Tests\Tools;

use App\Tools\Calculator;
use Mcp\Exception\ToolCallException;
use PHPUnit\Framework\TestCase;

final class CalculatorTest extends TestCase
{
    private Calculator $calculator;

    protected function setUp(): void
    {
        $this->calculator = new Calculator();
    }

    public function testAdd(): void
    {
        $this->assertSame(8.0, $this->calculator->add(5, 3));
        $this->assertSame(0.0, $this->calculator->add(5, -5));
        $this->assertSame(-3.0, $this->calculator->add(-1, -2));
    }

    public function testSubtract(): void
    {
        $this->assertSame(2.0, $this->calculator->subtract(5, 3));
        $this->assertSame(10.0, $this->calculator->subtract(5, -5));
        $this->assertSame(-1.0, $this->calculator->subtract(-3, -2));
    }

    public function testMultiply(): void
    {
        $this->assertSame(15.0, $this->calculator->multiply(5, 3));
        $this->assertSame(-10.0, $this->calculator->multiply(5, -2));
        $this->assertSame(0.0, $this->calculator->multiply(5, 0));
    }

    public function testDivide(): void
    {
        $this->assertSame(2.5, $this->calculator->divide(5, 2));
        $this->assertSame(-2.5, $this->calculator->divide(5, -2));
        $this->assertSame(1.0, $this->calculator->divide(5, 5));
    }

    public function testDivideByZeroThrowsException(): void
    {
        $this->expectException(ToolCallException::class);
        $this->expectExceptionMessage('Division by zero is not allowed.');

        $this->calculator->divide(10, 0);
    }

    public function testPower(): void
    {
        $this->assertSame(8.0, $this->calculator->power(2, 3));
        $this->assertSame(1.0, $this->calculator->power(5, 0));
        $this->assertSame(0.25, $this->calculator->power(2, -2));
    }

    public function testSquareRoot(): void
    {
        $this->assertSame(3.0, $this->calculator->squareRoot(9));
        $this->assertSame(0.0, $this->calculator->squareRoot(0));
        $this->assertEqualsWithDelta(1.4142135, $this->calculator->squareRoot(2), 0.0000001);
    }

    public function testSquareRootOfNegativeThrowsException(): void
    {
        $this->expectException(ToolCallException::class);
        $this->expectExceptionMessage('Cannot compute square root of a negative number.');

        $this->calculator->squareRoot(-1);
    }
}
