function generateMarkdown(data) {
	let reformatted = JSON.parse(data);
	console.log(`\nREADME.md generated successfully for ${reformatted.Title}\n`);
	return `
  # ${reformatted.Title}
  ![Alt Text Here](${reformatted.ImagePath})
  ## Description
  > ${reformatted.Description}
  ---
  ## Installation
  -   Steps:
    -   \`${reformatted.Installation}\`
  ---
  ## Usage
  > ${reformatted.Usage}
  ---
  ## Test
  > ${reformatted.Test}
  ---
  ## License
  > ${reformatted.License}
  ## Contributing
  > ${reformatted.Contributing}
  ## Credits
  > ${reformatted.Credits}
`;
	/* VAU: I think using array methods it's possible to take the Installation steps and separate them based on the substring ', '
  I'm not sure how to do it, though.
  */
}

module.exports = generateMarkdown;
