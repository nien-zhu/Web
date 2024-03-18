const path=require("path");
module.exports={
    //建置模式
    mode:"development", //預設 production
    //入口
    entry:"./src/index.js",
    //輸出
    output:{
        filename:"bundle.js",
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
            }
        ]
    }

}