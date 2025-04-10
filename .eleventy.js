module.exports = function (eleventyConfig) {

    // IMPORTANTE (addPassthroughCopy) la source path è relativa alla root di progetto e non alla input folder, la destinazione è relativa alla output folder
    eleventyConfig.addPassthroughCopy('src/bootstrap-italia'); 
    eleventyConfig.addPassthroughCopy('src/assets'); 
    //eleventyConfig.addPassthroughCopy({'src/bootstrap-italia': 'main/bootstrap-italia'}); //si puo personalizzare anche l'output directory in questo modo
    
    eleventyConfig.addWatchTarget('src/assets');
    
    return {
        markdownTemplateEngine: 'njk',
	    dataTemplateEngine: 'njk',
	    htmlTemplateEngine: 'njk',  //con questo posso usare direttamente file html come template, non c'è bisogno di rinominarli in njk
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};