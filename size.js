// 元画像のサイズ（px）
const originalWidth = 1200;
const originalHeight = 1440;

const widthField = document.getElementById('widthField');
const heightField = document.getElementById('heightField');
widthField.value = originalWidth;
heightField.value = originalHeight;

const onWidthFieldInput = () => {
    const newWidth = parseInt(widthField.value);
    const newHeight = originalHeight * newWidth / originalWidth;
    if (isNaN(newWidth) || isNaN(newHeight)) return;
    heightField.value = newHeight;
    document.getElementById('myimage').style.width = newWidth + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';
};

const onHeightFieldInput = () => {
    const newHeight = parseInt(heightField.value);
    const newWidth = originalWidth * newHeight / originalHeight;
    if (isNaN(newWidth) || isNaN(newHeight)) return;
    widthField.value = newWidth;
    document.getElementById('myimage').style.width = newWidth + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';
};

widthField.addEventListener('input', onWidthFieldInput);
heightField.addEventListener('input', onHeightFieldInput);
