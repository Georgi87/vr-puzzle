# VR Puzzle

A browser-based 3D jigsaw puzzle game built with Three.js and WebXR. Load any 3D model, shatter it into pieces, and reassemble it — in VR.

## How to play

### Setup

1. Open the app in your browser at `https://localhost:8443`.
2. Select a built-in model from the dropdown, or drag and drop your own `.fbx` file onto the scene.
3. Choose the number of pieces (20 – 1000) and click **Split**.

### Desktop (non-VR)

| Action | Control |
|---|---|
| Pan the scene | Left-click + drag |
| Orbit the camera | Right-click + drag |
| Zoom | Scroll wheel |

Pieces cannot be moved from the desktop view. Use desktop mode to inspect the puzzle from different angles.

### VR (Meta Quest 3 / WebXR)

1. Click **Enter AR (Quest 3)** to start a WebXR session.
2. Point a controller at a puzzle piece and press the **trigger** to grab it.
3. Move the piece to where you think it belongs and release the trigger.
4. Use the **thumbsticks** to navigate around the puzzle:
   - Left stick: move the puzzle left/right and forward/back.
   - Right stick: rotate the puzzle around the Y axis and move it up/down.

### Snapping

When a piece is close enough to its correct position, it will snap into place automatically. Snapped pieces move together as a group. Assemble all pieces to complete the puzzle — fireworks and a crowd cheer will celebrate your victory!

## Credits

### Background music

*"Happy & Positive Background"* by **HitsLab**
[https://pixabay.com/users/hitslab-47305729/](https://pixabay.com/users/hitslab-47305729/)
Licensed under the [Pixabay Content License](https://pixabay.com/service/license-summary/).

### Built-in models

- `arabian-gate.fbx`
- `maya-lintels.fbx`

### Technology

- [Three.js](https://threejs.org/) — 3D rendering
- [WebXR](https://www.w3.org/TR/webxr/) — VR/AR support
