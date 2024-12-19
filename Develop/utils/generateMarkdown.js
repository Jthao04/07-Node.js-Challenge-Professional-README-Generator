// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!license || license === "None") {
  return '';
}

const licenseBadges = {
  'GPL': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  'Apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
  'MPL': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  'BSD': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
  'Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  'No license': 'https://img.shields.io/badge/License-None-lightgrey.svg',
};

return `![License](${licenseBadges[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license || license === "None") {
  return '';
}

const licenseLinks = {
  'GPL': 'https://opensource.org/licenses/GPL-3.0',
  'Apache': 'https://opensource.org/licenses/Apache-2.0',
  'MIT': 'https://opensource.org/licenses/MIT',
  'MPL': 'https://opensource.org/licenses/MPL-2.0',
  'BSD': 'https://opensource.org/licenses/BSD-2-Clause',
  'Unlicense': 'https://choosealicense.com/licenses/unlicense/',
  'No license': 'https://choosealicense.com/no-permission/',
};

return `[License](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license || license === "None") {
  return '';
}

return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseSection = renderLicenseSection(data.License);

  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

${licenseBadge}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
Here is a link to my [GitHub](https://github.com/${data.github}).

If you have any questions, you can reach me at [${data.email}](mailto:${data.email}).
`;
}

export default generateMarkdown;
