//recupération des images
export function importImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  
  export function concatImgName(id) {
    let img;
    //concatenation du nom des images
    img = 'iguane'+id.toString()+'.jpg';  
    return img;
  }

