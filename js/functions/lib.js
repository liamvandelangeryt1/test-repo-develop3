// directly export the random function instead of a default export
export const random = (min = 0, max = 1) => {
    return Math.random() * (max - min) + min;
}
export const loadImage = url => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', event => {
            resolve(img);
        });
        img.addEventListener('error', event => {
            reject(event);
        });
        img.setAttribute('src', url);

        if(img.complete) {
            resolve(img);
        }
    });
}