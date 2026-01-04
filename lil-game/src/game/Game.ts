import Phaser from "phaser";
import { VillageScene } from "./scenes/VillageScene";

export function createGame(containerId: string) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: containerId,
        width: 800,
        height: 600,
        pixelArt: true,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        render: {
            antialias: false,
            pixelArt: true,
            roundPixels: true,
        },
        physics: {
            default: "arcade",
        },
        scene: [VillageScene],
    });
}

