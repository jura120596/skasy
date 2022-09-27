<?php
declare(strict_types=1);

namespace App\Utils;

use BaconQrCode\Renderer\Eye\EyeInterface;
use BaconQrCode\Renderer\Path\Path;

/**
 * Renders the inner eye as a circle.
 */
final class SugaiQrEye implements EyeInterface
{
    /**
     * @var self|null
     */
    private static $instance;

    private function __construct()
    {
    }

    public static function instance(): self
    {
        return self::$instance ?: self::$instance = new self();
    }

    public function getExternalPath(): Path
    {
        $path = new Path();
        $r = 1;
        $w = 3.5;
        $y = -$w;
        $x = -$w;
        $path = $path->move($x,$y+$r);
        for (; ''.$x <= ''. $w; $x += 0.1) {
            $x2 = $x; $y2 = $y;
            $kx = $x >= 0 ? 1 : -1;
            $ky = $y >= 0 ? 1 : -1;
            if ($x < -$w + $r || $x > $w - $r) {
                $dx =($x - $kx*($w-$r));
                $y2 = $ky*($w-$r) + $ky* sqrt(max(0, $r*$r-$dx*$dx));
            }
            $path = $path->line($x2, $y2);
        }
        $x = -$w;
        $y = $w;
        $path = $path->move($x, $y-$r);
        for (; ''.$x <= ''. $w; $x += 0.1) {
            $x2 = $x; $y2 = $y;
            $kx = $x >= 0 ? 1 : -1;
            $ky = $y >= 0 ? 1 : -1;
            if ($x < -$w + $r || $x > $w - $r) {
                $dx =($x - $kx*($w-$r));
                $y2 = $ky*($w-$r) + $ky* sqrt(max(0, $r*$r-$dx*$dx));
            }
            $path = $path->line($x2, $y2);
        }
        $path = $path->move(-$w, -$w+$r)
            ->line(-$w, $w-$r)
            ->line(-$w+$r, $w-$r)
            ->line(-$w+$r, -$w+$r)
            ->close()
        ;
        $path = $path->move($w, -$w+$r)
            ->line($w, $w-$r)
            ->line($w-$r, $w-$r)
            ->line($w-$r, -$w+$r)
            ->close()
        ;

        $y = -$w + 2 * $r;
        $x = -$w;
        $path = $path->move(-$w+$r, -$w+$r);
        for (; ''.$x <= ''. (-$w+$r); $x += 0.1) {
            $x2 = $x;
            $kx = $x >= 0 ? 1 : -1;
            $ky = $y >= 0 ? 1 : -1;
            $dx =($x - $kx*($w-$r));
            $y2 = $ky*($w-$r) + $ky* sqrt(max(0, $r*$r-$dx*$dx));
            $path = $path->line($x2+$r, $y2+$r);
        }
        $path =
            $path->line(-$w+$r,-$w+$r)
            ->close();
        $path = $path->move($w-$r, -$w+$r);
        for ($x = $w-$r; ''.$x <= ''. $w; $x += 0.1) {
            $x2 = $x;
            $kx = $x >= 0 ? 1 : -1;
            $ky = $y >= 0 ? 1 : -1;
            $dx =($x - $kx*($w-$r));
            $y2 = $ky*($w-$r) + $ky* sqrt(max(0, $r*$r-$dx*$dx));
            $path = $path->line($x2-$r, $y2+$r);
        }
        $path =
            $path->line($w-$r,-$w+$r)
            ->close();
        $x = $w - $r;
        $y = $w - $r;
        $path = $path->move($x, $y);
        for ($x = $w-$r; ''.$x <= ''. $w; $x += 0.1) {
            $x2 = $x;
            $kx = $x >= 0 ? 1 : -1;
            $ky = $y >= 0 ? 1 : -1;
            $dx =($x - $kx*($w-$r));
            $y2 = $ky*($w-$r) + $ky* sqrt(max(0, $r*$r-$dx*$dx));
            $path = $path->line($x2-$r, $y2-$r);
        }
        $path =
            $path->line($w-$r,$w-$r)
            ->close();
        $x = -$w + $r;
        $y = $w - $r;
        $path = $path->move($x, $y);
        for ($x = -$w; ''.$x <= ''. (-$w+$r); $x += 0.1) {
            $x2 = $x;
            $kx = $x >= 0 ? 1 : -1;
            $ky = $y >= 0 ? 1 : -1;
            $dx =($x - $kx*($w-$r));
            $y2 = $ky*($w-$r) + $ky* sqrt(max(0, $r*$r-$dx*$dx));
            $path = $path->line($x2+$r, $y2-$r);
        }
        $path =
            $path->line(-$w+$r,$w-$r)
            ->close();

        return $path;
    }

    public function getInternalPath(): Path
    {
        return (new Path())
//            ->move(1.5, 0)
//            ->ellipticArc(1.5, 1.5, 0., false, true, 0., 1.5)
//            ->ellipticArc(1.5, 1.5, 0., false, true, -1.5, 0.)
//            ->ellipticArc(1.5, 1.5, 0., false, true, 0., -1.5)
//            ->ellipticArc(1.5, 1.5, 0., false, true, 1.5, 0.)
//            ->close()
            ->move(-1.5, -1.5)
            ->line(1.5, -1.5)
            ->line(1.5, 1.5)
            ->line(-1.5, 1.5)
            ->close();
    }
}
