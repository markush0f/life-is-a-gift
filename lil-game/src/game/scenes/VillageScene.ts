import Phaser from "phaser";

export class VillageScene extends Phaser.Scene {
    constructor() {
        super("VillageScene");
    }

    preload() {
        this.load.tilemapTiledJSON(
            "village-map",
            "/assets/maps/village.json"
        );

        this.load.image(
            "Cliff_Tile",
            "/assets/tilesets/Cliff_Tile.png"
        );
    }

    create() {
        const map = this.make.tilemap({ key: "village-map" });

        const tileset = map.addTilesetImage(
            "Cliff_Tile",
            "Cliff_Tile"
        );

        if (!tileset) {
            throw new Error("Tileset not found");
        }

        map.layers.forEach((layerData, index) => {
            const layer = map.createLayer(layerData.name, tileset, 0, 0);
            layer?.setDepth(index);
        });

        this.cameras.main.setBounds(
            0,
            0,
            map.widthInPixels,
            map.heightInPixels
        );

        const zoomX = this.cameras.main.width / map.widthInPixels;
        const zoomY = this.cameras.main.height / map.heightInPixels;
        const zoom = Math.min(zoomX, zoomY);

        this.cameras.main.setZoom(zoom);
        this.cameras.main.setRoundPixels(true);

        this.cameras.main.centerOn(
            map.widthInPixels / 2,
            map.heightInPixels / 2
        );
    }
}
