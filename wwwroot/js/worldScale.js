// Scales Cole's World so the view shows at most ~1250x900 world pixels (58px HUD + 42px controls = 100px).
function setWorldScale() {
    const scale = Math.max(1, innerWidth / 1250, (innerHeight - 100) / 900);
    document.documentElement.style.setProperty('--world-scale', scale);
}
setWorldScale();
addEventListener('resize', setWorldScale);
