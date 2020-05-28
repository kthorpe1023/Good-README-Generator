function generateMarkdown(data) {
  console.log(data + "in generate read-me");
  let reformatted = JSON.parse(data);
  console.log(reformatted.Title + "PARSED in generate read-me")
  return `
# ${reformatted.Title}
# ${`Description`}
###### ${reformatted.Description}
# ${`Installations`}
###### ${reformatted.Installations}
# ${`Usage`}
###### ${reformatted.Usage}
# ${`License`}
######${reformatted.License}
# ${`Credits`}
###### ${reformatted.Credits}
# ${`Test`}
###### ${reformatted.Test}
# ${`Contrubing`}
###### ${reformatted.Contributing}
`;
}

module.exports = generateMarkdown;
