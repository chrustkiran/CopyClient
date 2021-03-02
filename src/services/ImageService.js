export const ImageService = {

     getFileFromUrl : async (url, defaultType = 'image/jpeg') => {
          const response = await fetch(url);
          const data = await response.blob();
          const name = url.split('/')[url.split('/').length - 1]
          return new File([data], name, {
            type: response.headers.get('content-type') || defaultType,
        })
        
      }
      
}