/**
 * Created by alejandrorioscalera
 * On 24/8/18
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©lazyload 2018 / 2019
 */

class LazyLoad {

    
    /** SMALL CONSTRUCTORS **/

    constructor(timeout = 50){
        setTimeout(() => {
            this.buildImages().forEach(element => {
                const source = element.getAttribute("data-src");
    
                element.setAttribute("data-src", null);
                element.setAttribute("src", source);
            })    
        }, timeout)
    }


    /** REST **/

    /**
     * This function start the lazyload
     */
    start(){

    }


    /** 
     * This function initialize the images var
     */
    buildImages(){
        let generalImages = document.getElementsByTagName("img");
        let array = new Array();
        
        Object.keys(generalImages).forEach(key => {
            const element = generalImages[key];

            if ( !this.isNull( element.getAttribute("data-src") ) )
                array.push(element);
        });

        return array
    }


    /**
     * This function check if the data is null
     * @param {*} obj 
     * @return {boolean} isNull
     */
    isNull(obj){
        return obj == null || 
               obj == undefined ||
               obj == ""
    }


}