// 元画像のサイズ（px）
const originalWidth = 1200;
const originalHeight = 1440;

const onResize = () => {
    // 現在のウィンドウサイズを取得
    const currentWindowWidth = window.innerWidth;
    const currentWindowHeight = window.innerHeight;

    // ウィンドウサイズを元に画像サイズを変更する
    const newWidth = currentWindowWidth;
    const newHeight = currentWindowHeight;

    document.getElementById('myimage').style.width = newWidth + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';

    // ウィンドウの真ん中に画像を表示します（センタリング処理）
    document.getElementById('myimage').style.top = (currentWindowHeight - newHeight) / 2 + 'px';
    document.getElementById('myimage').style.left = (currentWindowWidth - newWidth) / 2 + 'px';
}

window.addEventListener('resize', onResize);
window.addEventListener('load', onResize);
