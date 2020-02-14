const fs = require('fs');
const randomSeed = require('random-seed');
const tinycolor = require('tinycolor2');
const handlebars = require('handlebars');
const path = require('path');
const faker = require('faker');
const fonts = require('./fonts');

exports.randomTemplate = (seed) => {
  const rng = randomSeed.create(seed);
  faker.seed(rng.intBetween(0, 1000000));

  const company = {
    name: faker.company.companyName(),
    catchPhrase: faker.company.catchPhrase(),
  };

  const headerFont = faker.helpers.randomize(fonts.header);
  const accentColor = [rng.intBetween(0, 255), rng.intBetween(0, 255), rng.intBetween(0, 255)]
      .map(c => c.toString(16).padStart(2, "0"))
      .join('');

  const design = {
    fonts: {
      header: headerFont,
      body: faker.helpers.randomize(fonts.bodyStack),
      googleImport: fonts.makeGoogleImport(headerFont),
    },
    titleSep: faker.helpers.randomize([' | ', ' // ', ' / ', ' - ', ' ~ ', ': ']),
    fullWidth: Boolean(rng.intBetween(0, 1)),
    heroAlign: faker.helpers.randomize(['left', 'center', 'right']),
    heroSize: rng.intBetween(20, 40),
    image: faker.helpers.randomize(require('./images').default),
    colors: {
      accentColor,
      accentNegative: tinycolor(accentColor).isDark() ? 'ffffff' : '000000',
    },
  }

  const template = handlebars.compile(
    fs.readFileSync(path.join(path.dirname(__dirname), 'templates', 'index.html')).toString(),
  );

  return (title, content) => template({
    company,
    design,
    title,
    content,
  });
}
