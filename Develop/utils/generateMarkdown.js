function generateMarkdown(data) {
  console.log(data + "in generate read-me");
  let reformatted = JSON.parse(data);
  console.log(reformatted.Title + "PARSED in generate read-me")
  return `
  ![GitHub pull request check state](https://img.shields.io/github/status/s/pulls/kthorpe1023/Good-README-Generator/1)
# ${reformatted.Title}
## ${`Description`}

${reformatted.Description}

## ${`Table of Contents`}

${`[Installations]`}(#Installations)

${`[Usage]`}(#Usage)

${`[License]`}(#License)

${`[Credits]`}(#Credits)

${`[Test]`}(#Test)

${`[Contributing]`}(#Contributing)

## ${`Installations`}

${reformatted.Installations}
## ${`Usage`}

${reformatted.Usage}
## ${`License`}
${reformatted.License}
## ${`Credits`}

${reformatted.Credits}
## ${`Test`}

${reformatted.Test}
## ${`Contributing`}

${reformatted.Contributing}
`;
}

module.exports = generateMarkdown;
