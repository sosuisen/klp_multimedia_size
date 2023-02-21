const widthField = document.getElementById('widthField');
const heightField = document.getElementById('heightField');

const onWidthFieldInput = () => {
    const newWidth = parseInt(widthField.value);
    const oldHeight = parseInt(heightField.value);
    const newHeight = oldHeight; // ここを修正
    heightField.value = newHeight;
    document.getElementById('myimage').style.width = newWidth + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';
};

const onHeightFieldInput = () => {
    const newHeight = parseInt(heightField.value);
    const oldWidth = parseInt(widthField.value);
    const newWidth = oldWidth; // ここを修正
    widthField.value = newWidth;
    document.getElementById('myimage').style.width = newWidth + 'px';
    document.getElementById('myimage').style.height = newHeight + 'px';
};

widthField.addEventListener('input', onWidthFieldInput);
heightField.addEventListener('input', onHeightFieldInput);
