const svgText = document.querySelectorAll('#svg-text path')

for(let i = 0; i<svgText.length; i++) {
    console.log(`Letter i${i} is ${svgText[i].getTotalLength()}`)
}