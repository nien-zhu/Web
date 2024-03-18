const path=require("path");
module.exports={
    //建置模式
    mode:"development", //預設production
    //入口
    entry:"./src/app.js",
    //輸出
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
                    presets: ['@babel/preset-env']
                  }
                }
            }

        ]      
    }
};