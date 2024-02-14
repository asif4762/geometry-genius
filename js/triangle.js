function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    const triangleArea = 0.5 * base * height;
    console.log('Area Of The Triangle is: ', triangleArea);

    const triangleAreaSpan = document.getElementById('triangleArea');
    triangleAreaSpan.innerText = triangleArea;
}