import fse from "fs-extra"
import imagemin from "imagemin"
import imageminJpegtran from "imagemin-jpegtran"
import imageminPngquant from "imagemin-pngquant"
import imageminSvgo from "imagemin-svgo"
import imageminWebp from "imagemin-webp"
import imageminGifsicle from "imagemin-gifsicle"
import sharp from "sharp"

let inputFolder = "src"
let outputFolder = "opt"
let targetWidth = 1920


const proccesImg = async () =>{
  try {
    const files = await fse.readdir(inputFolder)

    for(const file of files){
      let inputPath = `${inputFolder}/${file}`
      let outputPath = `${outputFolder}/${file}`

      await sharp(inputPath).resize(targetWidth).toFile(outputPath)

      await imagemin([outputPath], {
        destination: outputFolder,
        plugins:[
          imageminJpegtran({quality: 80}),
          imageminPngquant(),
          imageminSvgo (),
          imageminWebp(),
          imageminGifsicle(),
        ],
      })
      console.log(`Se ha optimizado la imagen: ${file}`)
    }
    console.log("Hemos terminado")

  } catch (err) {

    console.error(err)
  }
}

proccesImg()