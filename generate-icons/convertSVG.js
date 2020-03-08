const fs = require('fs');
const { parseSync } = require('svgson');
const Handlebars = require('handlebars');

function readFiles(dirname, onFileContent, onError = () => {}) {
    const filenames = fs.readdirSync(dirname);

    filenames.forEach(async function(filename) {
        const data = fs.readFileSync(dirname + filename);
        const content = Buffer.from(data);
        await onFileContent(filename, content.toString());
      
    });
}


function getSvgData() {
    const data = [];
    readFiles(
        './icon-pack/',
        (filename, content) => {
            let viewBox = [];
            let paths = [];
            const name = filename.split('.')[0];
            const ext = filename.split('.')[1];
            if (ext !== 'svg') return;
            try {
                const c = parseSync(content);

                const vb = c.attributes.viewBox.split(' ');
                viewBox = [vb[2], vb[3]];
                c.children.forEach(child => {
                    if (child.name === 'path') {
                        paths.push(child.attributes.d);
                    }
                });

                data.push({
                  name, 
                  viewBox,
                  paths
                })

            } catch (e) {
                console.error("Error parsing svg file:", filename, e);
            }
        },
        error => console.error("Error reading files:", error),
    );
    return data;
}

function compileTemplate(data, templatePath){
  const file = Buffer.from(fs.readFileSync(templatePath)).toString();
  const template = Handlebars.compile(file);
  return template(data)
}

function buildOutput(){
  const data = getSvgData();

  const variablesTemplate = compileTemplate(
      { icons: data },
      __dirname + '/iconTemplate.handlebars',
  );
  fs.writeFileSync('./src/icons.ts', variablesTemplate);

  const displayTemplate = compileTemplate(
      { icons: data },
      __dirname + '/ViewIconsComponent.handlebars',
  );
  fs.writeFileSync('./src/ViewIcons.tsx', displayTemplate);

  const mdTemplate = compileTemplate({ icons: data }, __dirname + '/ViewIconsMD.handlebars');
  fs.writeFileSync('./Icons.md', mdTemplate);

  data.forEach(icon => {
    const iconFile = compileTemplate(icon, __dirname + '/IndividualIcon.handlebars');
    fs.writeFileSync(`./src/icons/${icon.name}.tsx`, iconFile);
  })
  

}

buildOutput();
