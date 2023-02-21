// 元画像のサイズ（px）
const originalWidth = 1200;
const originalHeight = 1440;

const onResize = () => {
    // 現在のウィンドウサイズを取得
    const currentWindowWidth = window.innerWidth;
    const currentWindowHeight = window.innerHeight;

    // ウィンドウサイズを元に画像サイズを変更する
    // 画像の幅をウィンドウの幅に合わせた場合
    let newHeight, newWidth;
    if (currentWindowWidth / originalWidth * originalHeight > currentWindowHeight) {
        // 画像を高さに合わせる必要あり
        newHeight = currentWindowHeight;
        newWidth = currentWindowHeight / originalHeight * originalWidth;
    }
    else {
        // 画像を幅に合わせる必要あり
        newWidth = currentWindowWidth;
        newHeight = currentWindowWidth / originalWidth * originalHeight;
    }

    document.getElementById('myimage').style.width = newWidth + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';

    // ウィンドウの真ん中に画像を表示します（センタリング処理）
    document.getElementById('myimage').style.top = (currentWindowHeight - newHeight) / 2 + 'px';
    document.getElementById('myimage').style.left = (currentWindowWidth - newWidth) / 2 + 'px';
}

window.addEventListener('resize', onResize);
window.addEventListener('load', onResize);
