import yaml from "js-yaml";
import fs from "fs";
import translate from "translate";
import language from "./lang.json" assert {type: "json"}

translate.engine = "google";

try {
async function quickStart() { 

    const translatedData = {}
    const fileContents = fs.readFileSync("./toTranslate.yml", "utf8");
    const data = yaml.load(fileContents);
    
    const target = "ru";

    for (let key in data) { 
        const text = await translate(data[key], language.language)
        console.log(text)

        translatedData[key] = text;

    }

    const yamlStr = yaml.dump(translatedData)
    fs.writeFileSync("./translated.yml", yamlStr, "utf8");

}

quickStart()



} catch (err) { 
    console.error(err)
}