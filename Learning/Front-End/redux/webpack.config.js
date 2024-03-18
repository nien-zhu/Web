const path=require("path");
module.exports={
    mode:"development", //default production
    entry:"./src/app.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, "dist")
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            }
        ]
        
    }
}