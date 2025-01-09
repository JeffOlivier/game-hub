const getCroppedImageUrl = (url: string) => {
    const index = url.indexOf("media/") + "media/".length;

    const frontOfUrl = url.slice(0, index); // this allows us to add info AFTER the media/ part of the URL
    const backOfUrl = url.slice(index); // this gives us the rest of the URL after the media/ part
    const croppedUrl = "crop/600/400/"; // this crops the image to 600x400
    return frontOfUrl + croppedUrl + backOfUrl;

    // OR, all together in a single line
    // return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
