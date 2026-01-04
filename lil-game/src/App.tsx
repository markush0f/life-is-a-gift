import { useEffect } from "react";
import { createGame } from "./game/Game";

export default function App() {
  useEffect(() => {
    const game = createGame("game-container");
    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div
      id="game-container"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
}
