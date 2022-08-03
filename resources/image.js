
export const compress = (img, modifyContext) => {
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    let width = img.width
    let height = img.height
    // log(img.width, img.height)
    // log(width, height)
    canvas.width = width
    canvas.height = height
    context.fillStyle = '#fff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    if (modifyContext) modifyContext(context, canvas);
    else context.drawImage(img, 0, 0, canvas.width, canvas.height)
    let base64Data = canvas.toDataURL('image/jpeg', 0.4)
    canvas = context = null
    // log(base64Data.length)
    img = null
    return base64Data
}

// base64 is converted to binary file
export const b64ToBlob = (b64Data, contentType) => {
    contentType = contentType || ''

    let byteCharacters = atob(b64Data) // Decode base64 data as a binary string
    let buffer = [] // Note that the first argument to the blob must be an array

    // type array is used to process binary files
    let aBuffer = new ArrayBuffer(byteCharacters.length)
    let uBuffer = new Uint8Array(aBuffer)
    for (let i = 0; i < byteCharacters.length; i++) {
        uBuffer[i] = byteCharacters.charCodeAt(i) // get Unicode encoding, store in type array
    }
    buffer.push(uBuffer)
    // Ordinary array is unable to generate binary files
    return new Blob(buffer, { // generate a binary file
        type: contentType
    })
}
