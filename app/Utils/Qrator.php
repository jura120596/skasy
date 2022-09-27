<?php


namespace App\Utils;


use BaconQrCode\Renderer\Eye\EyeInterface;
use BaconQrCode\Renderer\Eye\SquareEye;
use InvalidArgumentException;
use SimpleSoftwareIO\QrCode\Generator;

class Qrator extends Generator
{

    /**
     * Fetches the eye style.
     *
     * @return EyeInterface
     */
    public function getEye(): EyeInterface
    {
        if ($this->eyeStyle === 'circle_out') {
            return SugaiQrEye::instance();
        }

        return parent::getEye();
    }
    /**
     * Sets the eye style.
     *
     * @param string $style
     * @return Generator
     * @throws InvalidArgumentException
     */
    public function eye(string $style): self
    {
        if (! in_array($style, ['square', 'circle', 'circle_out'])) {
            throw new InvalidArgumentException("\$style must be square or circle. {$style} is not a valid eye style.");
        }

        $this->eyeStyle = $style;

        return $this;
    }
}
